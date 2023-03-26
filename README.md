# Project-Kelompok-2

Langkah-langkah yang harus dilakukan :

1. Setelah berhasil di clone selanjutnya buat database baru (manual) dengan nama :
    [
      media-database,
      user_database
    ]
2. Masuk terminal disetiap service, kemudian perbarui database dengan cara "npx sequelize db:migrate".
3. Masuk terminal di service-user, kemudian perbarui databse dengan cara "npx sequelize db:seed:all".

Apabila bermasalah pada node module dengan output seperti ini :
"return process.dlopen(modul, path._makeLong(namafile));"

-> maka lakukan ini pada terminal :
$ rm -rf node_modules/
$ npm update

# Cara Undo-All-Database
Masuk terminal disetiap service, kemudian perbarui database dengan cara : 

-> "npx sequelize db:migrate:undo:all"
-> "npx sequelize db:seed:undo:all"

