const portfolio = [
    {'name':'Hack the North 2019 MPb3ats', 'desc':'', 'source':'src/img/medium.jpg', 'repo':'https://github.com/kevinjycui/MPb3ats'},
    {'name':'PennApps XX Hand Spoken OCR', 'desc':'', 'source':'src/img/handspoken.JPG', 'repo':'https://github.com/kevinjycui/hand-spoken-backend'},
    {'name':'RBC VoiceHacks Innovoicer w/ Rasa to Mycroft', 'desc':'', 'source':'src/img/mycroft.jpg', 'repo':'https://github.com/kevinjycui/innovoicer'},
    {'name':'ENFERI w/ Emotiv and Arduino', 'desc':'', 'source':'src/img/work-img.jpg', 'repo':'https://github.com/kevinjycui/enferi'},
    {'name':'Dijkstra Transportation Network', 'desc':'', 'source':'src/img/map_visual.jpg', 'repo':'https://github.com/kevinjycui/Dijkstra-Transportation-Network'},
    {'name':'Human Anatomy Model w/ Unity', 'desc':'', 'source':'src/img/human.jpg', 'repo':'https://github.com/kevinjycui/human-anatomy-model'},
]

for (e of portfolio) {
    let link = document.createElement("a");
    link.href = e.repo;
    link.target = '_blank';
    let profile = document.createElement("div");
    profile.className = "eventModule";
    let head = document.createElement("h4");
    head.className = "event-name";
    head.append(document.createTextNode(e.name))
    let subtext = document.createElement("a");
    subtext.className = "event-descrip";
    subtext.append(document.createTextNode(e.desc));
    profile.appendChild(head);
    profile.appendChild(subtext);
    profile.style.backgroundImage = "url("+e.source+")";
    link.appendChild(profile);
    let element = document.getElementById("event-dir");
    element.appendChild(link)
}
