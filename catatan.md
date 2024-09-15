# Release 0

## Install

npx create-next-app@latest

- server
  npm install json-server@0.17.4
  npx json-server --watch db.json --port 3001

## Daisy

npm i -D daisyui@latest
require('daisyui'),

# Release 1 (Get)

- buat interface tipe data
- Ngefetch data

# How to fetch

- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

## Membuat Routing

- Buat folder di dalam app sesuai dengan requirement
- Bikin file di dalam folder tersebut bernama page.tsx

## Buat file component setara sama app

- Pake Navbar

# Fetching createTask server Side

- https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#examples

# Released 2 (Post)

- Buat submit handler dengan menerima FormData ketika tombol submit di klik
- SSR pertama declare body nya dulu , buat dapetin data dari form gunakan action get dari FormData. jangan lupa pasang Headers juga
- lakukan validasi jika data tidak diisi dan redirect melalui query buat menampilkan error
- fetch data dengan method headers dan body dari data yang diisi tadi
  [https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch]
- validasi jika response.ok dari kirim data gagal
- kosongkan cache lama, sehingga saat redirect sudah get data terbaru dengan revalidate
- Revalidate [https://nextjs.org/docs/app/api-reference/functions/revalidatePath]
- Redirect ke home dengan data terbaru [https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating]

# Release 3 (Validasi dan Menampilkan error)

## Component Error Notification dari query

- Kirimkan melalui query redirect saat validasi isi form
- Buat komponen ErrorNotification tersendiri karena search params hanya bisa di CSR
- [https://nextjs.org/docs/app/api-reference/functions/use-search-params]
  Cara lainnya gunakan sweetalert

# Release 4 Detail Page dengan Dynamic Routing (Filter)

- Buat folder dengan [] untuk memiliki dynamic routing
- Buat interface Props params yang berisi object dynamic route tsb
- destructure params dan terima dia di parameter function yang mau ngefetch
- fetch ala SSR dengan uri dari params tersebut

# Release 5 Button Delete

- Buat Component button dan file action.ts di dalam src

## Action

- lakukan ala server buat function yang menerima parameter id yang mau di delete
- fetch dengan menambahkan /id pada parameter uri dan method menjadi delete
- revalidate

## Button

- bikin function client side yang menerima parameter {id} : {id: number} (di props dari halaman memanggil button tsb)
- return button dengan onClick memanggil action function(id)
- Panggil di halaman yang membutuhkan action tsb dan jangan lupa props kan id nya, supaya di file component akan menerima id tersebut dan menerimanya di action sehingga dapat melakukan action
