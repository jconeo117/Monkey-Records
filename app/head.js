export default function Head () {
  return (
    <>
      <title>Monkey Records - Sello discografico Montería</title>
      <meta name='description' content='Monkey Records es un sello discográfico e iniciativa artística, que se dedica a la producción, logística y gestión de eventos en vivo.' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <script
        async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5023080932601600'
        crossorigin='anonymous'
      />
      {/* <!-- Google tag (gtag.js) - Google Analytics --> */}
      <script async src='https://www.googletagmanager.com/gtag/js?id=G-Z4BD0W38FS' />
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'G-Z4BD0W38FS');
      </script>
      <link rel='icon' href='/Monkey_records.ico' />
      <link rel='preload' href='../styles/global.css' as='style' onload="this.onload=null;this.rel='stylesheet'" />
    </>
  )
}
