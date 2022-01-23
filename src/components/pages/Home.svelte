<script>
  import { link, push } from 'svelte-spa-router'
	import { prep_time, shijo_time, kinhin_time, section_num, has_setting } from '../../stores/SessinSetting.js';

  let _prep_time;
  let _shijo_time;
  let _kinhin_time;
  let _section_num;
  let _has_setting;
  prep_time.subscribe(value => { _prep_time = value; });
  shijo_time.subscribe(value => { _shijo_time = value; });
  kinhin_time.subscribe(value => { _kinhin_time = value; });
  section_num.subscribe(value => { _section_num = value; });
  has_setting.subscribe(value => { _has_setting = value; });

  import {Howl, Howler} from 'howler';
  import sound from "../../assets/audio/1_chime.m4a"
  import { prep_chime } from '../../functions/chime.js';

  function startSessin() {
    has_setting.set(true);
    // 止静鐘
    if (_prep_time > 0) {
      prep_chime();
    }
  }
</script>

<body class="flex flex-row justify-center">
  <div class="container m-auto">
    <h1 class="text-center text-5xl"><i class="fas fa-vihara fa-fw"></i></h1>
    <h1 class="text-center text-3xl">接心鐘</h1>

    <section class="object-contain my-12">
      <h2 class="text-center py-2">設定</h2>

      <table class="mx-auto">
        <tr>
          <td class="w-40">準備の時間(分)</td>
          <td class="w-40 text-right py-2">
            <select bind:value={_prep_time} on:change="{() => prep_time.set(_prep_time)}">
              {#each [0, 1, 3, 5] as length}
                <option value={length}>
                  {length}
                </option>
              {/each}
            </select>
          </td>
        </tr>
        <tr>
          <td>止静の時間(分)</td>
          <td class="text-right py-2">
            <select bind:value={_shijo_time} on:change="{() => shijo_time.set(_shijo_time)}">
              {#each [5, 15, 30, 45, 60, 75, 90, 105, 120] as length}
                <option value={length}>
                  {length}
                </option>
              {/each}
            </select>
          </td>
        </tr>
        <tr>
          <td>経行の時間(分)</td>
          <td class="text-right py-2">
            <select bind:value={_kinhin_time} on:change="{() => kinhin_time.set(_kinhin_time)}">
              {#each [0, 5, 10, 15, 20] as length}
                <option value={length}>
                  {length}
                </option>
              {/each}
            </select>
          </td>
        </tr>
        <tr>
          <td>炷数</td>
          <td class="text-right py-2">
            <select bind:value={_section_num} on:change="{() => section_num.set(_section_num)}">
              {#each [1,2,3,4,5,6,7,8,9,10] as length}
                <option value={length}>
                  {length}
                </option>
              {/each}
            </select>
          </td>
        </tr>
      </table>
    </section>

    <section class="object-contain">
      <div class="text-center my-4">
        <a href="/sessin" use:link class="button" on:click={startSessin}>開始</a>
        <span/>
        <a href="/special" use:link class="button">詳細設定</a>
      </div>
    </section>

    <section class="object-contain text-right mt-20 mx-16">
      <div class="col-start-2 col-span-8 flex justify-between my-4">
        <span class="">ver.1.0</span>
        <a href="/about" use:link class="bg-transparent">このアプリについて</a>
      </div>
    </section>
  </div>

</body>
