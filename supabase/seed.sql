insert into categories (id, name)
values
    (gen_random_uuid(), 'Hip Hop'),
    (gen_random_uuid(),'Sports'),
    (gen_random_uuid(),'News'),
    (gen_random_uuid(),'Video Games'),
    (gen_random_uuid(),'Music'),
    (gen_random_uuid(),'Movies');

insert into up (id, name, avatar, userrole)
values
    (gen_random_uuid(), 'Shinjuku', 'https://www.resetera.com/data/avatar/31633138563/1429-m.jpg', 1123),
    (gen_random_uuid(), 'NeoRaider', 'https://www.resetera.com/data/avatar/31678712116/39633-m.jpg', 1123),
    (gen_random_uuid(), 'Jawmuncher', 'https://www.resetera.com/data/avatar/31645570873/36943-m.jpg', 1123),
    (gen_random_uuid(), 'Idas', 'https://www.resetera.com/data/avatar/31655240464/111169-m.jpg', 1123),
    (gen_random_uuid(), 'hlhbk', 'https://www.resetera.com/data/avatar/31508978074/4280-m.jpg', 1123),
    (gen_random_uuid(), 'Tyaren', 'https://www.resetera.com/data/avatar/31685106727/6400-m.jpg', 1123),
    (gen_random_uuid(), 'Bishop89', 'https://www.resetera.com/data/avatar/31509021995/4097-m.jpg', 1123),
    (gen_random_uuid(), 'Kenzodielocke', 'https://www.resetera.com/data/avatar/31559448545/2454-m.jpg', 1123),
    (gen_random_uuid(), 'AEF1907', 'https://www.resetera.com/data/avatar/31655539340/106894-m.jpg', 1123),
    (gen_random_uuid(), 'Scotia', 'https://www.resetera.com/data/avatar/31694951103/128578-m.jpg', 1123),
    (gen_random_uuid(), 'P40L0', 'https://www.resetera.com/data/avatar/31651652695/44923-m.jpg', 1123),
    (gen_random_uuid(), 'Zexyen', 'https://www.resetera.com/data/avatar/31684744913/3038-m.jpg', 1123),
    (gen_random_uuid(), 'Vanillalite', 'https://www.resetera.com/data/avatar/31551283447/340-m.jpg', 1123),
    (gen_random_uuid(), 'StrykerIsland', 'https://www.resetera.com/styles/resetera/images/resetera-default-avatar-transparent.png?_v=1', 1123),
    (gen_random_uuid(), 'AndreiRublev', 'https://www.resetera.com/data/avatar/31686654094/44725-m.jpg', 1123),
    (gen_random_uuid(), 'FarSightXR20', 'https://www.resetera.com/data/avatar/31690656576/37410-m.jpg', 1123),
    (gen_random_uuid(), 'LantWar', 'https://www.resetera.com/data/avatar/31692839070/45877-m.jpg', 1123),
    (gen_random_uuid(), 'Messofanego', 'https://www.resetera.com/data/avatar/31544046528/1159-m.jpg', 1123),
    (gen_random_uuid(), 'vestan', 'https://www.resetera.com/data/avatar/31674735305/113746-m.jpg', 1123),
    (gen_random_uuid(), 'Smitch', 'https://www.resetera.com/data/avatar/31694844510/10374-m.jpg', 1123),
    (gen_random_uuid(), 'Lukar', 'https://www.resetera.com/data/avatar/31665445293/17950-m.jpg', 1123);

insert into thre (id, thread_title, category_id, up_id)
values
    (gen_random_uuid(), 'Whats your favorite mindless comfort game?', (select id from categories order by random() limit 1), (select id from up order by random() limit 1));