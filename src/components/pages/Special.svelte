<script>
  import { link, push } from 'svelte-spa-router'
	import { different_time_for_first_session, time_for_first_session } from '../../stores/SessinSetting.js';


  let _different_time_for_first_session;
  let _time_for_first_session;
  different_time_for_first_session.subscribe(value => { _different_time_for_first_session = value; });
  time_for_first_session.subscribe(value => { _time_for_first_session = value; });
</script>

<body class="">
  <div class="container m-auto px-20">
    <h1 class="text-center text-5xl"><i class="fas fa-vihara fa-fw"></i></h1>

    <section class="object-contain mt-8">
      <h2 class="text-left py-2">詳細設定</h2>

      <label class="text-center my-2">
        <input type=checkbox bind:checked={_different_time_for_first_session} on:change="{() => different_time_for_first_session.set(_different_time_for_first_session)}">
        最初の止静のみ長さを変える
      </label>

      {#if _different_time_for_first_session}
        <table class="mx-auto mt-2 w-full">
          <tr>
            <td>最初の止静の時間(分)</td>
            <td class="text-right py-2">
              <select bind:value={_time_for_first_session} on:change="{() => time_for_first_session.set(_time_for_first_session)}">
                {#each [5, 15, 30, 45, 60, 75, 90, 105, 120] as length}
                  <option value={length}>
                    {length}
                  </option>
                {/each}
              </select>
            </td>
          </tr>
        </table>
      {/if}
    </section>

    <section class="object-contain">
      <div class="text-center my-4">
        <a href="/" use:link class="button">戻る</a>
      </div>
    </section>
  </div>

</body>
