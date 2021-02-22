from extract_video_frames import *
from make_barcode import *

frames_dir = extract_video_frames('opening.mp4')
frames_dir='opening frames'
barcode = make_barcode(frames_dir, bar_width=2, dims=(300,300))