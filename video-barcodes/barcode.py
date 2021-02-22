from extract_video_frames import *
from make_barcode import *

try:
    frames_dir = extract_video_frames('opening.mp4')
except FileExistsError:
    # extract video frames not run, dir already exists
    frames_dir='opening frames'
barcode = make_barcode(frames_dir, bar_width=2, dims=(300,300))