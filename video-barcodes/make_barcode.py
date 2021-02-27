import os
import re
import cv2
import numpy as np

def make_barcode(frames_dir, bar_width=1, dims=None):
    '''
    Generates and save barcode graphic with dir containing image files.

    Parameters
        frames_dir [string]: path to dir with frames (assumes that individual frames are labelled as 'frame 1' etc. or frames will not be sorted)
        bar_width [int] [default = 1]: width of each bar (in pixels)
        dim [tuple] [default = None]: 
    Returns
        file [string]: filename of saved generated barcode
    '''

    # only includes png and jpg files
    frame_files = sorted([f for f in os.listdir(os.path.join(frames_dir)) if f.endswith('.png') or f.endswith('.jpg')])

    # sort frames by frame number e.g. frame 10 before frame 2
    frame_files.sort(key=lambda f: int(re.sub('\D', '', f)))

    # calculate total barcode width
    barcode_width = bar_width*len(frame_files)

    # read first frame in frames dir and set its height as barcode height
    barcode_height = cv2.imread(os.path.join(frames_dir, frame_files[0]), cv2.IMREAD_UNCHANGED).shape[0]

    # create blank barcode "canvas"
    barcode = np.zeros((barcode_height, barcode_width, 3), np.uint8)

    for i, f in zip(range(0, barcode_width, bar_width), frame_files):
        frame_path = os.path.join(frames_dir, f)
        frame = cv2.imread(frame_path, cv2.IMREAD_UNCHANGED)    # read each frame
        bar = cv2.resize(frame, (bar_width, barcode_height), interpolation = cv2.INTER_AREA)    # resize each frame 
        barcode[:,i:(i+bar_width)] = bar    # put each frame into the barcode canvas


    # dim = (100, 200)    # width, height
    # # resize image
    # barcode = cv2.resize(barcode, dim, interpolation = cv2.INTER_AREA)
    filename = "barcode.png"

    if dims:    # resize if there are values for dimensions
        barcode = cv2.resize(barcode, dims, interpolation = cv2.INTER_AREA)
        filename = "barcode{}x{}.png".format(dims[0], dims[1])  # adds input dimensions to filename
    
    cv2.imwrite(filename, barcode)

    # uncomment 3 lines below to view barcode in a pop-up window
    # cv2.imshow(filename, barcode)
    # cv2.waitKey(0)
    # cv2.destroyAllWindows()

    return filename


if __name__ == "__main__":
    pass
        