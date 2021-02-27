from extract_video_frames import *
from make_barcode import *

videopath = 'video.mp4'

if os.path.exists(videopath):
    frames_dir = extract_video_frames(videopath)
    barcode = make_barcode(frames_dir, bar_width=20, dims=(1920,1080))
else:
    print('ERROR: video file does not exist')