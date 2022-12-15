(()=>{"use strict";var e={373:(e,t,o)=>{o.r(t)},228:function(e,t,o){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getAnswer=t.showAnswer=t.hideAnswer=void 0;const s=i(o(8)),a=i(o(812)),n=o(147),c=o(502),d=document.querySelector(".next"),r=i(o(739)),u=i(o(952)),p=new Audio;p.volume=.5;const l=document.querySelector(".score-count"),m=document.querySelector(".bird-name"),g=document.querySelector(".bird-description"),_=document.querySelector(".image");function w(e=n.randomId){m.textContent=a.default[n.level][e].name,g.textContent=a.default[n.level][e].description,_.src=a.default[n.level][e].image,g.classList.add("visible")}t.hideAnswer=function(){m.innerHTML="**** <br> Угадай исполнителя",g.textContent="",_.src=s.default,g.classList.remove("visible")},t.showAnswer=w,t.getAnswer=function(e){const t=document.querySelectorAll(".bird-item");if(e-1===n.randomId){w();const o=document.querySelector("audio");n.score+=n.count,l.textContent=n.score,t[e-1].style.color="green",t[e-1].style.background="rgb(94 93 93 / 33%)",n.count=5,d.disabled=!1,o.pause(),(0,c.stop)(),p.src=r.default,p.play()}e-1!==n.randomId&&(w(e-1),t[e-1].style.color="red",t[e-1].style.background="#5e5d5d",n.count--,p.src=u.default,p.play())}},502:function(e,t,o){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.stop=t.setAudio=void 0;const s=i(o(812)),a=o(147),n=document.querySelector(".audio-player"),c=document.createElement("audio"),d=document.querySelector(".play-stop span"),r=document.querySelector(".progress-bar"),u=document.querySelector(".progress"),p=document.querySelector(".volume-bar"),l=document.querySelector(".volume");t.setAudio=function(){r.style.width=0,c.src=s.default[a.level][a.randomId].audio,n.append(c)};let m=!0;function g(){c.pause(),d.className="icon-play2",m=!m}t.stop=g,d.addEventListener("click",(()=>{m?(c.play(),d.className="icon-pause",m=!m):g()})),c.addEventListener("timeupdate",(function(e){const t=c.currentTime/c.duration*100;r.style.width=`${t}%`})),u.addEventListener("click",(function(e){const t=this.clientWidth,o=e.offsetX,i=c.duration;c.currentTime=o/t*i})),l.addEventListener("click",(function(e){const t=this.clientWidth,o=e.offsetX,i=(c.volume,o/t*100);c.volume=i/100,p.style.width=o/t*100+"%"}))},2:function(e,t,o){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getListButtons=void 0;const s=o(228),a=i(o(812)),n=o(147),c=document.querySelector(".answer");t.getListButtons=function(){a.default[n.level].forEach((e=>{const t=document.createElement("li");t.classList="bird-item",t.innerText=e.name,c.append(t),t.addEventListener("click",(()=>(0,s.getAnswer)(e.id)))}))}},812:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=[[{id:1,name:"Ворон",species:"Corvus corax",description:"Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.",image:"https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3"},{id:2,name:"Журавль",species:"Grus grus",description:"Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».",image:"https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3"},{id:3,name:"Ласточка",species:"Delichon urbicum",description:"Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.",image:"https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3"},{id:4,name:"Козодой",species:"Caprimulgus europaeus",description:"Козодой – неприметная птица, известная благодаря своему голосу. Песня козодоя звучит как монотонная трель похожая на тарахтение мотоцикла. Такое дребезжание слышно от заката до рассвета, его тональность, частота и громкость изменяются. ",image:"https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3"},{id:5,name:"Кукушка",species:"Cuculus canorus",description:"Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои яйца.",image:"https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3"},{id:6,name:"Синица",species:"Parus major",description:"В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.",image:"https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3"}],[{id:1,name:"Воробей",species:"Passer domesticus",description:"Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.",image:"https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3"},{id:2,name:"Грач",species:"Corvus frugilegus",description:"Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.",image:"https://live.staticflickr.com//65535//49347123322_291c86b016.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3"},{id:3,name:"Галка",species:"Coloeus monedula",description:"Слово «галка» произошло из старославянского языка и переводится как «чёрный». Этим словом часто называют воронов или других черных птиц. Латинское название галки «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещам.",image:"https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3"},{id:4,name:"Певчий дрозд",species:"Turdus philomelos",description:"Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звучных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечернее время. Поют дрозды в течении всего периода гнездования.",image:"https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3"},{id:5,name:"Сорока",species:"Pica pica",description:"Сорока очень трудолюбивая птица. Она строит до восьми гнёзд, а потом выбирает из них самое лучшее. Вход в гнездо сорок всегда обращен на юг, чтобы в жилище было теплее. Сороки являются единственными птицами, которые узнают себя в зеркале.",image:"https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3"},{id:6,name:"Сойка",species:"Garrulus glandarius",description:"Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается создать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и звуки, которые создает человек. На зиму они делают большие запасы желудей и орехов.",image:"https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3"}],[{id:1,name:"Зяблик",species:"Fringilla coelebs",description:"В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.",image:"https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3"},{id:2,name:"Клёст",species:"Loxia curvirostra",description:"Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.",image:"https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3"},{id:3,name:"Горлица",species:"Streptopelia turtur",description:"Горлица обитает в смешанных и широколиственных лесах, а также в городских парках и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкают к людям. Благодаря мелодичному приятному пению горлиц часто разводят в домашних условиях.",image:"https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3"},{id:4,name:"Дятел",species:"Dendrocopos major",description:"Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.",image:"https://live.staticflickr.com/65535/49339376578_e933426455.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3"},{id:5,name:"Удод",species:"Upupa epops",description:"Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.",image:"https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3"},{id:6,name:"Стриж",species:"Apus apus",description:"Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.",image:"https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3"}],[{id:1,name:"Жаворонок",species:"Alauda arvensis",description:"Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.",image:"https://live.staticflickr.com/65535/47105096764_f751fba568.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3"},{id:2,name:"Соловей",species:"Luscinia luscinia",description:"Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.",image:"https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3"},{id:3,name:"Скворец",species:"Sturnus vulgaris",description:"Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.",image:"https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3"},{id:4,name:"Иволга",species:"Oriolus oriolus",description:"Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.",image:"https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3"},{id:5,name:"Свиристель",species:"Bombycilla garrulus",description:"У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.",image:"https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3"},{id:6,name:"Щегол",species:"Carduelis carduelis",description:"Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю",image:"https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3"}],[{id:1,name:"Орёл",species:"Aquila nipalensis",description:"В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров",image:"https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3"},{id:2,name:"Коршун",species:"Milvus migrans",description:"Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.",image:"https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3"},{id:3,name:"Лунь",species:"Circus cyaneus",description:"Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».",image:"https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3"},{id:4,name:"Сокол",species:"Falco peregrinus",description:"Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.",image:"https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3"},{id:5,name:"Ястреб",species:"Accipiter gentilis",description:"Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.",image:"https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3"},{id:6,name:"Филин",species:"Bubo bubo",description:"Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.",image:"https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3"}],[{id:1,name:"Альбатрос",species:"Diomedea exulans",description:"Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния",image:"https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3"},{id:2,name:"Олуша",species:"Sula nebouxii",description:"Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок",image:"https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3"},{id:3,name:"Буревестник",species:"Puffinus griseus",description:"Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.",image:"https://live.staticflickr.com//607//22136056020_935cb113f9.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3"},{id:4,name:"Пеликан",species:"Pelecanus",description:"Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.",image:"https://upload.wikimedia.org/wikipedia/commons/b/ba/American_White_Pelican%2C_non-breeding_adult_%2838164183581%29.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3"},{id:5,name:"Пингвин",species:"Aptenodytes forsteri",description:"Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.",image:"https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3"},{id:6,name:"Чайка",species:"Larus argentatus",description:"Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.",image:"https://live.staticflickr.com/65535/48577115317_7034201dde.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3"}]]},98:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getRandomId=void 0;const i=o(147);t.getRandomId=function(e){i.randomId=Math.floor(Math.random()*e)}},743:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.restartGame=void 0,t.restartGame=function(){location.reload()}},147:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.startGame=t.count=t.score=t.level=t.randomId=void 0;const i=o(228),s=o(502),a=o(98),n=o(2),c=o(178),d=o(743),r=document.querySelector(".bird-description"),u=document.querySelector(".bird-name"),p=document.querySelector(".audio-player"),l=document.querySelector(".next");function m(){(0,c.stage)(),(0,a.getRandomId)(6),(0,s.setAudio)(),(0,n.getListButtons)()}document.querySelectorAll(".restart"),t.randomId=0,t.level=0,t.score=0,t.count=5,t.startGame=m,m(),l.textContent=`next ${t.level+1}/6`,l.addEventListener("click",(()=>{t.level++,function(){const e=document.querySelectorAll(".bird-item"),o=document.querySelector("audio"),c=document.querySelectorAll(".stage");if(t.level<=5&&(c[t.level].classList.add("stage-activ"),l.textContent=`next ${t.level+1}/6`,l.disabled=!0,(0,s.stop)(),o.remove(),(0,a.getRandomId)(6),(0,s.setAudio)(),e.forEach((e=>{e.remove()})),(0,i.hideAnswer)(),(0,n.getListButtons)()),5===t.level&&(l.textContent="finish"),t.level>=6&&(l.disabled=!0,u.textContent=`Ваш результат ${t.score} из 30`,r.style.display="none",p.style.display="none",o.pause(),t.score<30)){const e=document.querySelector(".description"),t=document.createElement("button");t.textContent="Перезагрузить виктрорину?",t.className="restart",e.append(t),t.addEventListener("click",(()=>{(0,d.restartGame)()}))}}()})),console.log("задание выполнено в полном обьеме за искдючением Extra scope -20")},178:function(e,t,o){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.stage=void 0;const s=i(o(812));t.stage=function(){const e=document.querySelector(".stageList");s.default.forEach(((t,o)=>{const i=document.createElement("li");i.textContent=`stage ${o+1}`,i.className="stage",0===o&&i.classList.add("stage-activ"),e.append(i)}))}},8:(e,t,o)=>{e.exports=o.p+"assets/63c7311b67e0e8cdc78a.jpg"},739:(e,t,o)=>{e.exports=o.p+"assets/b84d0b4c81044c4cb817.mp3"},952:(e,t,o)=>{e.exports=o.p+"assets/410bfa2612de2d422f1a.mp3"}},t={};function o(i){var s=t[i];if(void 0!==s)return s.exports;var a=t[i]={exports:{}};return e[i].call(a.exports,a,a.exports,o),a.exports}o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),o(373),o(147)})();