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

# ---- The clip-slide sketch
# VR Gastro: the headset split screen, cropped above the burned-in captions
clip GastroVR_levelex_tech_demo_1080.mp4 39 9.6 "crop=1600:900:320:0,scale=1280:720:flags=lanczos" 23 sketches/clip-slide/clips/gastro-vr.mp4
# Cue Quest: a placeholder moment, past the opening caption
clip CueQuestGameplayVertical2.mov 53.6 6.4 "scale=720:1280:flags=lanczos" 24 sketches/clip-slide/clips/cue-quest.mp4

# ---- The deck
# VR Gastro: the shot after the cut into the polyp, to the last frame before the headset face; full width, cropped
# just above the burned-in caption
clip GastroVR_levelex_tech_demo_1080.mp4 36.85 8.25 "crop=1920:928:0:0,scale=1280:-2:flags=lanczos" 23 deck/clips/gastro-vr.mp4
# Cue Quest: from the first table after Alma's dialog, ending a frame before the second caption fades in
clip CueQuestGameplayVertical2.mov 24.15 10.2 "scale=720:1280:flags=lanczos" 24 deck/clips/cue-quest.mp4
# Rope Rescue: forest into cave, captions reading "only one bird / can grab a rope"; kept at the source's 640×480
clip RopeRescue_youtube_480.mp4 11.5 6 "null" 23 deck/clips/rope-rescue.mp4
# Mushroom 11: four trailer shots (gear, sunset lake, boulder, pillar), starting a frame after the gear shot's cut
clip Mushroom11_available_now_720.mp4 40.42 10.13 "null" 23 deck/clips/mushroom-11.mp4
# Venice (working title): a screen recording panning the canal town, ending on a mission dialog; the left edge's black
# strip cropped off to exact 16:9, halved to 30 fps
clip Venice_screen_recording_2026-11-06.mov 70 10 "crop=2538:1428:8:0,scale=1280:720:flags=lanczos,fps=30" 23 deck/clips/venice.mp4
# IntelliGym (hockey): a "Drive to the Net" drill from the faceoff, through the scrum, to the goal and its flash, ending
# before the score banner; the game's 4:3 panel cropped from the padded 16:9 frame
clip IntelliGym_hockey_training_1080.mp4 3.5 7 "crop=1440:1080:239:0,scale=960:720:flags=lanczos" 23 deck/clips/intelligym.mp4
# Terra (Hide & Seek for Intel's touchscreen Ultrabook): hands sculpt hills on the laptop's screen, then the cut to
# full-screen mowing, ending before the interview; from the making-of video
clip Terra_youtube_nBoVowZNeDM_1080.mp4 101.5 11.2 "scale=1280:720:flags=lanczos" 23 deck/clips/terra.mp4
