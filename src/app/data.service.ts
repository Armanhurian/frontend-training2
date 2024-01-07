import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  musicsOffline : any[] = [

    {id : 1 , type : 'سنتی' , title : 'کیمیا' , creator : 'علیرضا قربانی' , image : '../assets/images/560f85e7662a9fa15e03a33b.jpg', src : 'https://dl.naslmusic.ir/music/1394/07/Alireza-Ghorbani-Kimiya-128.mp3' },
    {id : 2 , type : 'سنتی' , title : 'مرغ سحر' , creator : 'محمدرضا شجریان' , image : '../assets/images/MohammadReza-Shajryan–Morghe-Sahar_bibis.ir_.jpg', src : 'https://dlmoviez.ir/musicisho?path=src/singles/9812/Mohammadreza%20Shajarian%20-%20Morghe%20Sahar.mp3' },
    {id : 3 , type : 'سنتی' , title : 'هوای زمزمه هایت' , creator : 'همایون شجریان' , image : '../assets/images/download.jfif', src : 'https://irsv.upmusics.com/99/Homayoun%20Shajarian%20%7C%20Havaye%20Zemzemehayet%20(320).mp3' },
    {id : 4 , type : 'سنتی' , title : 'بهانه ی تو ' , creator : 'محمد اصفهانی' , image : '../assets/images/download (1).jfif', src : 'https://dl.tabamusic.com/Music/1398/07/Mohammad Esfahani - Bahaneye To (128).mp3' },
    {id : 5 , type : 'سنتی' , title : 'عقیق' , creator : 'علیرضا قربانی' , image : '../assets/images/Alireza-Ghorbani-Aghigh.jpg', src : 'https://dl.rozmusic.com/Music/1396/07/22/Alireza%20Ghorbani%20-%20Aghigh%20(128).mp3' },
    {id : 6 , type : 'پاپ' , title : 'تو' , creator : 'عرفان طهماسبی' , image : '../assets/images/Erfan-Tahmasbi-To.jpg', src : 'https://dl.rozmusic.com/Music/1402/06/11/Erfan%20Tahmasbi%20-%20To%20%28128%29.mp3' },
    {id : 7 , type : 'پاپ' , title : 'یه پاییز' , creator : 'محسن چاووشی' , image : '../assets/images/download (2).jfif', src : 'https://irsv.upmusics.com/AliBZ/Mohsen%20Chavoshi%20-%20Ye%20paeiz%20(320).mp3' },
    {id : 8 , type : 'پاپ' , title : 'پاقدم' , creator : 'علیرضا طلیسچی' , image : '../assets/images/photo_2023-10-12_19-23-17.jpg', src : 'https://irsv.upmusics.com/AliBZ/Alireza%20Talischi%20-%20Paghadam%20(320).mp3' },
    {id : 9 , type : 'پاپ' , title : 'بی تو نمیمونم' , creator : 'حامی' , image : '../assets/images/Hamid-Hami-Bi-To-Nemimoonam.jpg', src : 'https://dl.rozmusic.com/Music/1400/03/20/Hamid%20Hami%20-%20Bi%20To%20Nemimoonam%20%28128%29.mp3' },
    {id : 10 , type : 'پاپ' , title : 'نارنج و ترنج' , creator : 'حامی' , image : '../assets/images/Hamid-Hami-Narenjo-Toranj.jpg', src : 'https://dl.rozmusic.com/Music/1396/12/29/Hamid%20Hami%20-%20Narenjo%20Toranj%20(128).mp3' },
    {id : 11 , type : 'نوستالژی' , title : 'پوست شیر' , creator : 'ابی' , image : '../assets/images/download (3).jfif', src : 'https://dl.asalmusic.ir/1401/06/05/Ebi%20-%20Pooste%20shir.mp3' },
    {id : 12 , type : 'نوستالژی' , title : 'شام مهتاب' , creator : 'داریوش' , image : '../assets/images/download (4).jfif', src : 'https://sv.musicset.ir/music/Old/Dariush/1/Dariush%20-%20Shame%20Mahtab-128.mp3' },
    {id : 13 , type : 'نوستالژی' , title : 'پر پرواز' , creator : 'شادمهر عقیلی' , image : '../assets/images/download (5).jfif', src : 'https://dl.naslmusic.ir/music/1400/04/Shadmehr Aghili - Pare Parvaz (128-Naslemusic).mp3' },
    {id : 14 , type : 'نوستالژی' , title : 'پاییز ' , creator : 'شادمهر عقیلی' , image : '../assets/images/download (6).jfif', src : 'https://dl.musiceto.com/Music/1400/9/02%20Paeiz.mp3?_=1' },
    {id : 15 , type : 'نوستالژی' , title : 'با تو' , creator : 'ابی' , image : '../assets/images/Ebi-Ba-Tou.jpg', src : 'https://dl.musiceto.com/Music/1401/7/01%20-%20Ba%20Tou.mp3?_=1' },
    {id : 16 , type : 'نوستالژی' , title : 'اگه یه روز' , creator : 'فرامرز اصلانی' , image : '../assets/images/download (8).jfif', src : 'https://dl.nakamanmusic.com/Music/Faramarz%20Aslani/Age%20Ye%20Rooz/Age%20Yerooz%20wWw.NakaMan.iR.mp3' },
    {id : 17 , type : 'رپ' , title : 'از چی بگم' , creator : 'یاس' , image : '../assets/images/Yas7.jpg', src : 'https://dl.uptrack.ir///Uptrack-ROOt/1399/01Farvardin/13/ROBOT/Yas - Az Chi Begam 128.mp3' },
    {id : 18 , type : 'رپ' , title : 'خواب راحت' , creator : 'حصین و بیداد' , image : '../assets/images/download (7).jfif', src : 'https://xx.venusmusic.ir/archive/H/Ho3ein/Single/Ho3ein%20Ft%20Bidad%20-%20Khaabe%20Rahat.mp3' },
    {id : 19 , type : 'رپ' , title : 'نیلوفر آبی' , creator : 'رضا پیشرو' , image : '../assets/images/reza_pishro_niloofare_abi.jpg.webp', src : 'https://dl.melusic.ir/music/Reza Pishro/reza_pishro_niloofare_abi 128.mp3' },
    {id : 20 , type : 'رپ' , title : 'یه روزی' , creator : 'سهراب ام جی' , image : '../assets/images/یه-روزی-از-سهراب-ام-جی.jpg', src : 'https://dl.cactusmusic.ir/2021/03/YeRoozi2.mp3' },
    {id : 21 , type : 'جدیدترین ها' , title : 'یاغی' , creator : 'سهراب پاکزاد' , image : '../assets/images/download (9).jfif', src : 'https://irsv.upmusics.com/AliBZ/Sohrab%20Pakzad%20-%20Yaghi%20(320).mp3' },
    {id : 22 , type : 'جدیدترین ها' , title : 'بیشتر از عشق' , creator : 'رضا صادقی', image : '../assets/images/download (10).jfif', src : 'https://dl.rozmusic.com/Music/1402/09/30/Reza%20Sadeghi%20-%20Bishtar%20Az%20Eshgh%20%28128%29.mp3' },
    {id : 23 , type : 'جدیدترین ها' , title : 'در هوایت' , creator : 'محمد اصفهانی' , image : '../assets/images/download (11).jfif', src : 'https://dl.musicfile.ir/Music/1402/9/Mohammad%20Esfahani%20-%20Dar%20Havayat%20%28128%29.mp3' },
    {id : 24 , type : 'جدیدترین ها' , title : 'نگاه آخر' , creator : 'مهدی جهانی' , image : '../assets/images/download (12).jfif', src : 'https://irsv.upmusics.com/AliBZ/Mehdi%20Jahani%20%7C%20Negahe%20Akhar%20(320).mp3' },
    {id : 25 , type : 'جدیدترین ها' , title : 'همه رو جواب کردم' , creator : 'مسعود صادقلو' , image : '../assets/images/download (13).jfif', src : 'https://dl.rozmusic.com/Music/1402/09/29/Masoud%20Sadeghloo%20-%20Hamaro%20Javab%20Kardam%20%28128%29.mp3' },
    {id : 26 , type : 'جدیدترین ها' , title : 'کی مثل من ' , creator : 'یونا' , image : '../assets/images/download (14).jfif', src : 'https://dl.musicfile.ir/Music/1402/10/Youna%20-%20Ki%20Mesle%20Man%20%28128%29.mp3' },
    {id : 27 , type : 'جدیدترین ها' , title : 'دوست دارم' , creator : 'مجید رضوی' , image : '../assets/images/download (15).jfif', src : 'https://dl.rozmusic.com/Music/1402/10/15/Majid%20Razavi%20-%20Dooset%20Daram%20%28128%29.mp3' },
    {id : 28 , type : 'جدیدترین ها' , title : 'زدم بیرون' , creator : 'دکاموند و  زانیار خسروی' , image : '../assets/images/download (16).jfif', src : 'https://dl.solahangs.com/Music/1402/10/D/128/Dekamond%20%26%20Xaniar%20-%20Zadam%20Biroon%20%28128%29.mp3' },
  ]

  apiUrl = 'https://6582b58c02f747c83679f8ee.mockapi.io/musicApi/v3/musics'

  musics = this.http.get(this.apiUrl)
}
