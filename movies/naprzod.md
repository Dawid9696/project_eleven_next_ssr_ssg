---
title: Naprzód
age: 8
description: Najnowsza animacja studia Pixar. Tym razem przenosimy się do współczesnego świata zamieszkiwanego przez fantastyczne, bajkowe stworzenia. Razem z dwoma braćmi wyruszymy na niesamowicie zakręconą podróż w poszukiwaniu... magii!
duration: 102
genre: Animowany
photo: "https://media.multikino.pl/thumbnails/50/rc/OTI4QjU4/eyJ0aHV…ploads/images/films_and_events/naprzod-plakat_72ad32dc1f.jpg"
released: true
city: [Zabrze, Katowice]
seance: [{ dimension: 2D, dubbing: Dubbing, hour: "22:00" }, { dimension: 3D, dubbing: Dubbing, hour: "22:00" }]
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
