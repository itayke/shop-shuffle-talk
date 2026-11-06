#!/bin/sh
# Rebuilds every trimmed clip from raw/: muted H.264 MP4s that start playing fast. Video is not in git, so this is
# the record of each cut. Add a line per clip; run from anywhere.
set -e
cd "$(dirname "$0")"

PRESET=slow
FLAGS="-an -c:v libx264 -preset $PRESET -movflags +faststart"

# clip <source in raw/> <start s> <length s> <filter> <crf> <output>
clip() {
  mkdir -p "$(dirname "$6")"
  ffmpeg -v error -y -ss "$2" -t "$3" -i "raw/$1" -vf "$4,format=yuv420p" $FLAGS -crf "$5" "$6"
  echo "$6"
}

# VR Gastro: the headset split screen, cropped above the burned-in captions
clip GastroVR_levelex_tech_demo_1080.mp4 39 9.6 "crop=1600:900:320:0,scale=1280:720:flags=lanczos" 23 sketches/clip-slide/clips/gastro-vr.mp4
# Cue Quest: a placeholder moment, past the opening caption
clip CueQuestGameplayVertical2.mov 53.6 6.4 "scale=720:1280:flags=lanczos" 24 sketches/clip-slide/clips/cue-quest.mp4
