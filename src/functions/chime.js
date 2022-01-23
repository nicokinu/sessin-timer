/**
 * 色々音を鳴らします。
 */
import {Howl, Howler} from 'howler';
import sound1 from "../assets/audio/1_chime.m4a"
import sound2 from "../assets/audio/2_chimes.m4a"
import sound3 from "../assets/audio/3_chimes.m4a"

// 止静鐘(3回)
export function start_chime(){
  console.log("止静");
  var audio = new Howl({
    src: [sound3]
  });
  audio.play();
}

// 経行鐘(2回)
export function walk_chime(){
  console.log("経行");
  var audio = new Howl({
    src: [sound2]
  });
  audio.play();
}

// 抽解鐘(1回)
export function prep_chime(){
  console.log("抽解");
  var audio = new Howl({
    src: [sound1]
  });
  audio.play();
}

// 放禅鐘(1回)
export function end_chime(){
  console.log("放禅");
  var audio = new Howl({
    src: [sound1],
    rate: 0.5,
  });
  audio.play();
}
