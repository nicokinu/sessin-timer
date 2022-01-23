<script>
  import { link, push } from 'svelte-spa-router'
</script>

<body class="">
  <div class="container m-auto">
    <h1 class="text-center text-5xl"><i class="fas fa-vihara fa-fw"></i></h1>
    <h1 class="text-center text-3xl">接心鐘</h1>

    <section class="object-contain mt-2">
      <div class="grid grid-cols-10 gap-4">
        <div class="col-start-2 col-span-2">
          <h2 >制作</h2>
        </div>
        <div class="col-span-6">
          火童<br/>
          <a href="https://seekingfire.netlify.app/">https://seekingfire.netlify.app/</a>
        </div>
      </div>
    </section>

    <section class="object-contain my-12 grid grid-cols-10 gap-4">
      <h2 class="col-start-2 col-span-2">更新履歴</h2>

      <table class="border border-solid col-span-6">
        <thead>
          <tr>
            <th class="border">ver.</th>
            <th class="border">公開日</th>
            <th class="border">更新内容</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border">0.1</td>
            <td class="border">2020/05/05</td>
            <td class="border">新規公開</td>
          </tr>
            <td class="border">0.2</td>
            <td class="border">2020/05/06</td>
            <td class="border">鐘の音を変更、時間の順序を修正</td>
          <tr>
          </tr>
            <td class="border">0.3</td>
            <td class="border">2020/05/07</td>
            <td class="border">前回の設定を記憶</td>
          <tr>
          </tr>
            <td class="border">0.4</td>
            <td class="border">2020/05/07</td>
            <td class="border">特殊設定(安泰寺仕様)を追加</td>
          <tr>
          </tr>
            <td class="border">1.0</td>
            <td class="border">2020/05/16</td>
            <td class="border">レイアウトの調整</td>
          <tr>
        </tbody>
      </table>
    </section>

    <section class="object-contain grid grid-cols-10 gap-4">
      <h2 class="col-start-2 col-span-2">謝辞</h2>
      <div class="col-span-6">
        ネルケ無方老師<br/>
        「仏教のアレ」編集部様
      </div>
    </section>

    <section class="object-contain grid grid-cols-10 gap-4">
      <div class="col-start-2 col-span-8 flex justify-around my-4">
        <a href="/" use:link class="button">戻る</a>
        <!-- <a href="/contact" use:link class="button">ご意見・ご感想</a> -->
      </div>
    </section>
  </div>

</body>
