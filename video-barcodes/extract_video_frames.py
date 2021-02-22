import os
import cv2

def extract_video_frames(path_in):
    '''
    Gets frames from video file as images (1 frame per second).

    Parameters
        path_in (string): path of video file

    Returns
        path_out (string): path where extracted frames (images) are saved to.
    '''
    
    video_name = path_in[:path_in.rfind(".")].strip()   # get video name without the file extension
    video_name = "{} frames".format(video_name)
    os.mkdir(video_name)    # make a dir to store the extracted frames
    path_out = video_name   # set path_out to be returned later

    vidcap = cv2.VideoCapture(path_in)  # open video file sequence

    count = 0
    success = True
    while success:
        # up video timestamp by 1 second (1000 milliseconds)
        vidcap.set(cv2.CAP_PROP_POS_MSEC,(count*1000))  # move to position in video sequence
        success,image = vidcap.read()   # grabs, decodes and returns the next video frame

        if not success: # assumes that if read() returns false, there's no more frames in video to retrieve
            print("{} frames read.".format(count))
            break

        cv2.imwrite(os.path.join(path_out, "frame%d.png" % count), image)     # save frame as PNG file
        count = count + 1

    return path_out

if __name__=="__main__":
    pass