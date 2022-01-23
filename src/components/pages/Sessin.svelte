<body class="p-10 justify-center">
  <div class="text-center mt-40 py-2 text-5xl text-gray-500">{current_activity_label}</div>

  <section class="object-contain text-center mt-40">
    <button class="text-gray-500" on:click={back}>もどる</button>
  </section>

</body>


<script>
  import {link, push} from 'svelte-spa-router'
  import { onMount } from 'svelte';

  import {
    prep_time, shijo_time, kinhin_time, section_num, has_setting,
    different_time_for_first_session, time_for_first_session } from '../../stores/SessinSetting.js';
  import { start_chime, walk_chime, prep_chime, end_chime } from '../../functions/chime.js';

  let _prep_time;
  let _shijo_time;
  let _kinhin_time;
  let _section_num;
  let _has_setting;
  let _different_time_for_first_session;
  let _time_for_first_session;

  prep_time.subscribe(value => { _prep_time = value; });
  shijo_time.subscribe(value => { _shijo_time = value; });
  kinhin_time.subscribe(value => { _kinhin_time = value; });
  section_num.subscribe(value => { _section_num = value; });
  has_setting.subscribe(value => { _has_setting = value; });
  different_time_for_first_session.subscribe(value => { _different_time_for_first_session = value; });
  time_for_first_session.subscribe(value => { _time_for_first_session = value; });

	onMount(() => {
    if (_has_setting == false) {
      push("/");
      return;
    }
    setCallbacks();
	});

  let schedule = [];
  var current_point = 0;
  var current_callback = null;
  const min_msec = 60000;

  function setCallbacks() {
    // 止静鐘
    schedule.push({ type: "start", duration: _prep_time * min_msec });
    for (var i = 1; i < _section_num; i++) {
      // 経行鐘
      if (_shijo_time > 0) {
        if (_different_time_for_first_session == true && i == 1) {
          schedule.push({ type: "walk", duration: _time_for_first_session * min_msec });
        } else {
          schedule.push({ type: "walk", duration: _shijo_time * min_msec });
        }
      }
      // 抽解鐘
      if (_kinhin_time > 0) {
        schedule.push({ type: "prep", duration: _kinhin_time * min_msec });
      }
      // 止静鐘
      if (_prep_time > 0) {
        schedule.push({ type: "start", duration: _prep_time * min_msec });
      }
    }
    // 放禅鐘
    schedule.push({ type: "end", duration: _shijo_time * min_msec });

    nextCallback()
  }

  function nextCallback() {
    if (current_point == schedule.length) {
      current_point++;
      return;
    }

    var next_callback = schedule[current_point];
    current_callback = setTimeout(
      function () {
        if (next_callback["type"] == "start") {
          start_chime();
        } else if (next_callback["type"] == "walk") {
          walk_chime();
        } else if (next_callback["type"] == "prep") {
          prep_chime()
        } else if (next_callback["type"] == "end") {
          end_chime();
        }
        nextCallback();
      },
      next_callback["duration"]
    );
    current_point++;
  }

  $: current_activity_label = function(){
    var next_callback = schedule[current_point - 2];
    if (next_callback == null) return "準備";
    switch(next_callback["type"]){
      case "start":
        return "止静";
      case "prep":
        return "準備";
      case "walk":
        return "経行";
      case "end":
        return "放禅";
    }
  }();

  function back(){
    if (current_callback != null) {
      clearTimeout(current_callback);
    }
    push("/")
  }
</script>



