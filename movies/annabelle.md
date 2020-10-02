---
title: ANNABELLE WRACA DO DOMU
age: 18
description: Demonologowie Ed i Lorraine Warren chcą za wszelką cenę uniemożliwić Annabelle dokonywanie kolejnych okrutnych czynów. Przywożą opętaną lalkę do zamkniętego pokoju z niezwykłymi przedmiotami w swoim domu. Układają ją „bezpiecznie” za poświęconym szkłem i proszą księdza o udzielenie błogosławieństwa.
duration: 106
genre: Horror
photo: https://media.multikino.pl/thumbnails/50/rc/NzIyRTEw/eyJ0aHV…uploads/images/films_and_events/annabelle3-pl_f49676b3d4.jpg
released: true
city: [Zabrze, Katowice]
seance: [{ dimension: 3D, dubbing: Dubbing, hour: "18:00" }, { dimension: 2D, dubbing: Napisy, hour: "20:00" }]
---

<!-- @format -->

1. Enable `route_localnet` for `docker0` interface:

```
sysctl -w net.ipv4.conf.docker0.route_localnet=1
```

2. Add this rules to iptables:

```
iptables -t nat -I PREROUTING -i docker0 -d 172.17.0.1 -p all -j DNAT --to 127.0.0.1
iptables -t filter -I INPUT -i docker0 -d 127.0.0.1 -p all -j ACCEPT
```

3. You can now use `172.17.0.1` to access localhost on the host.

reference https://stackoverflow.com/questions/24319662/from-inside-of-a-docker-container-how-do-i-connect-to-the-localhost-of-the-mach
