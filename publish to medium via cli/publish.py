import requests
import pathlib
import argparse
import subprocess

### ADD MEDIUM INTEGRATION TOKEN HERE ###
TOKEN = "" 

headers = {
    "Accept":	"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    "Accept-Encoding"	:"gzip, deflate, br",
    "Accept-Language"	:"en-US,en;q=0.5",
    "Connection"	:"keep-alive",
    "Host"	:"api.medium.com",
    "Authorization": "Bearer {}".format(TOKEN),
    "Upgrade-Insecure-Requests":	"1",
    "User-Agent":	"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:89.0) Gecko/20100101 Firefox/89.0"
}

def read_file(filepath):
    '''reads file from input filepath and returns a dict with the file content and contentFormat for the publish payload'''
    f = open(filepath, 'r')
    with open(filepath, 'r') as f:
        content = process_markdown(f.read())

    # Get file extension
    file_ext = pathlib.Path(filepath).suffix
    file_ext = "markdown" if file_ext == "md" else file_ext
    return {"content": content, "contentFormat": file_ext}

def prep_data(args):
    '''prepares payload to publish post'''
    data = {
        "title": args['title'],
    }
    data = {**data, **read_file(args['filepath'])}
    if args['tags']:
        data['tags'] = [t.strip() for t in args['tags'].split(',')]
    data['publishStatus'] = args.get('pub', 'draft')
    return data

def get_author_id():
    '''uses the /me medium api endpoint to get the user's author id'''
    response = requests.get("https://api.medium.com/v1/me", headers=headers, params={"Authorization": "Bearer {}".format(TOKEN)})
    if response.status_code == 200:
        return response.json()['data']['id']
    return None

def post_article(data):
    '''posts an article to medium with the input payload'''
    author_id = get_author_id()
    url = "https://api.medium.com/v1/users/{}/posts".format(author_id)
    response = requests.post(url, headers=headers, data=data)
    if response.status_code in [200, 201]:
        response_json = response.json()
        # get URL of uploaded post
        pub_url = response_json["data"]["url"]
        return pub_url
    return None

def copy_to_clipboard(to_copy):
    '''utility function to copy string to clipboard'''
    if not to_copy: return
    process = subprocess.Popen('pbcopy', env={'LANG': 'en_US.UTF-8'}, stdin=subprocess.PIPE)
    process.communicate(to_copy.encode('utf-8'))

if __name__ == "__main__":
    # initialise parser
    parser = argparse.ArgumentParser()

    # add compulsory arguments
    parser.add_argument('filepath') # positional argument
    parser.add_argument('-t', '--title', required=True, help="title of post", type=str) # named argument

    # add optional arguments
    parser.add_argument('-a', '--tags', required=False, help="tags, separated by ,", type=str)
    parser.add_argument('-p', '--pub', required=False, help="publish status, one of draft/unlisted/public, defaults to draft", type=str, choices=["public", "unlisted", "draft"])

    # read arguments
    args = parser.parse_args()

    data = prep_data(vars(args))
    post_url = post_article(data)
    copy_to_clipboard(post_url) # copy url to clipboard if any
    print(post_url)
