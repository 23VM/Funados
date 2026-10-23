(function () {
  'use strict';

  /* ============================================================
     PREGUNTAS (40 por categoría)
     Se muestran después de "¿Quién es más probable que…"
     ============================================================ */
  var QUESTIONS = {
    normal: [
      "se ponga tryhard en una partida casual y le arruine la diversión a todo el team?",
      "rompa el control por un rage quit y diga que 'ya venía fallando'?",
      "lleve tres días sin bañarse y lo niegue con total seguridad?",
      "viva en el gym creyéndose fisicoculturista profesional?",
      "se grabe en el espejo del gym 'para el progreso' y jamás lo suba?",
      "le eche la culpa al lag después de morir cinco veces seguidas?",
      "juegue ranked hasta las 5 AM la noche antes de un examen?",
      "se compre una skin carísima y diga que 'es una inversión'?",
      "se convierta en gurú de skincare y mewing después de ver dos videos?",
      "pierda un 1v1 y diga que 'estaba probando cosas'?",
      "se quede dormido en plena videollamada del grupo?",
      "se ponga a jugar con 1% de batería y sin cargador a la vista?",
      "use la misma hoodie una semana entera?",
      "se crea el personaje principal de la película del grupo?",
      "mutee a todo el chat de voz porque se hartó de escucharlos?",
      "pase media hora en el lobby sin decidir qué jugar?",
      "le robe la kill a un compañero y la celebre como si fuera suya?",
      "juegue con el micro tan pegado a la boca que se le escuche hasta el pensamiento?",
      "diga 'es mi última partida' y siga jugando tres horas más?",
      "llegue tarde a todo con una excusa digna de película?",
      "gaste todo en comida a domicilio y después diga que está en la quiebra?",
      "se tome cuarenta selfies para subir una con cara de 'ni me esforcé'?",
      "vea más tutoriales de gym de los que entrena?",
      "se crea ajedrecista pro porque vio dos videos de YouTube?",
      "tenga una bio de 'lobo solitario' y no salga de su cuarto ni a comer?",
      "se robe comida del refri ajeno y se haga el loco?",
      "sobreviva a un apocalipsis zombie solo por esconderse y no hacer nada?",
      "tenga mil memes guardados y no encuentre ninguno cuando lo necesita?",
      "explique el lore de su anime favorito a las 3 AM a quien no preguntó?",
      "monte un negocio random inspirado en TikTok y quiebre en una semana?",
      "se quede viendo TikTok 'cinco minutitos' y desaparezca tres horas?",
      "cambie de personalidad cada vez que se obsesiona con un juego nuevo?",
      "diga 'me da igual' y revise el chat cada diez segundos?",
      "compre el pase de batalla y no suba ni un nivel?",
      "haga la tarea de última hora y aun así saque la mejor nota?",
      "grite tan fuerte en una partida que los vecinos vengan a tocar la puerta?",
      "pierda el celular mientras lo tiene en la mano?",
      "deje a todo el grupo en visto y luego diga 'ay, lo vi tarde'?",
      "se ponga a hacer cardio solo para subir una story y pare a los dos minutos?",
      "tenga más cuentas smurf que amigos reales?"
    ],
    incomodas: [
      "le deba plata a alguien de este grupo desde hace más de un año?",
      "te haya dejado en visto justo cuando más lo necesitabas?",
      "sea el más simp del grupo y le regale cosas a quien ni le responde?",
      "le escriba a su ex a las 3 AM 'por error'?",
      "venda al grupo entero por un chisme jugoso?",
      "tenga los gustos musicales más raros y los defienda con su vida?",
      "haya llorado por la muerte de un personaje de anime o serie?",
      "se haya enamorado de un personaje ficticio?",
      "se ría en el peor momento posible, como en un funeral?",
      "haya mandado un mensaje al chat equivocado y haya querido desaparecer?",
      "tenga la carpeta de fotos más cringe del celular?",
      "te traicione por una pizza?",
      "suba una indirecta y después diga 'no era para nadie'?",
      "tenga una cuenta fake para stalkear a su crush?",
      "le dé like por accidente a una foto del 2019 mientras stalkea?",
      "se caiga frente a todos y finja que fue a propósito?",
      "pida prestado algo y 'se le olvide' devolverlo por seis meses?",
      "tenga una playlist secreta para llorar a escondidas?",
      "se haga un tatuaje con el nombre de su pareja a los dos meses de noviazgo?",
      "le haya dicho 'te quiero' a la persona equivocada?",
      "se sepa de memoria una canción cringe y la cante sin una pizca de pena?",
      "desaparezca del grupo apenas consigue pareja y regrese cuando lo dejan?",
      "tenga el historial de búsqueda más sospechoso de todos?",
      "invente una excusa tan mala que todos supieron que mentía?",
      "se quede con el vuelto y haga como si nada?",
      "mande un audio de siete minutos y se arrepienta a los diez segundos?",
      "se una a un plan solo por la comida gratis?",
      "finja estar enfermo para no ir a un plan?",
      "te cancele un plan para salir con alguien que conoció ayer?",
      "siga guardando chats de gente que ya ni le habla?",
      "tenga el apodo más humillante y se lo haya ganado a pulso?",
      "suelte un secreto del grupo 'sin querer queriendo'?",
      "se ría hasta llorar y luego llore de verdad en la misma noche?",
      "repruebe una materia por andar pendiente de su crush?",
      "tenga más fotos de comida que de personas en la galería?",
      "diga 'yo no soy celoso' mientras revisa el celular de su pareja?",
      "se coma tu comida del refri y te mire a los ojos mientras lo niega?",
      "haya hecho un ridículo épico en una exposición del colegio?",
      "esté enamorado en secreto de alguien de este grupo?",
      "te preste dos dólares y te lo recuerde por el resto de tu vida?"
    ],
    hot: [
      "se bese con alguien en una fiesta y al día siguiente no recuerde con quién?",
      "tenga un crush con alguien de este grupo y lo niegue hasta la muerte?",
      "se ponga más coqueto cuando suena reggaetón y bajan las luces?",
      "haya mandado un mensaje picante a la persona equivocada?",
      "sea el mejor besador de todos los presentes?",
      "se haya besado con alguien de este grupo sin que los demás lo sepan?",
      "tenga el chat más peligroso del celular?",
      "se enrede de nuevo con su ex en plena fiesta?",
      "tenga más tensión con alguien de esta sala que una serie de Netflix?",
      "se quede a dormir en casa de alguien 'solo a dormir'?",
      "tenga una app de citas escondida en una carpeta secreta?",
      "desaparezca de la fiesta cuarenta minutos y vuelva con el pelo desordenado?",
      "elija siempre 'reto' en verdad o reto para ver si le toca un beso?",
      "se ponga rojo apenas alguien menciona la palabra 'beso'?",
      "ligue como un campeón y no sepa mantener lo que consigue?",
      "mande un 'te extraño' a las 2 AM sin razón válida?",
      "se enamore de alguien después de una sola noche de fiesta?",
      "haya tenido un 'amigo con derechos' y lo niegue?",
      "tenga más situationships que amigos?",
      "acepte un reto de beso frente a todos sin dudarlo?",
      "se pierda una hora en el balcón 'tomando aire' con alguien?",
      "guarde el secreto más picante de todo el grupo?",
      "se arregle de más porque sabe que va a estar su crush?",
      "lance miradas peligrosas desde el otro lado de la sala?",
      "se pierda en la fiesta y aparezca con una historia muy sospechosa?",
      "se eche medio frasco de perfume para conquistar a alguien?",
      "mande una nota de voz seductora y se le escape una tos horrible?",
      "lo hayan pillado con alguien en casa y se haya hecho el sueco?",
      "diga 'solo somos amigos' de alguien que ya besó?",
      "se ponga el mejor outfit de su vida solo para impresionar a una persona?",
      "se haya besado con alguien solo por un reto?",
      "tenga una historia prohibida que jamás contaría en una cena familiar?",
      "sea el último en irse de la fiesta por 'quedarse un ratito más' con alguien?",
      "se ponga celoso cuando su crush habla con otra persona?",
      "se arrepienta de un beso y lo repita al día siguiente?",
      "baile perreo con más actitud que nadie en la pista?",
      "se escape de la fiesta con alguien 'a ver las estrellas'?",
      "siga hablando de su romance de verano como si fuera una novela?",
      "se ponga nervioso cuando su crush lo mira fijamente?",
      "diga 'no pasó nada' cuando todos saben que sí pasó?"
    ]
  };

  var MODES = {
    normal: { label: 'Normal', color: '#5ea9e8' },
    incomodas: { label: 'Incómodas / Graciosas', color: '#f4be4b' },
    hot: { label: 'Hot +18', color: '#ef5b6b' }
  };

  var PLAYER_COLORS = ['#f2705e', '#f4be4b', '#45bfae', '#5ea9e8', '#a58be0', '#7cc576', '#ef8fb0', '#f29a4b'];
  var CONFETTI_COLORS = ['#f2705e', '#f4be4b', '#45bfae', '#5ea9e8', '#a58be0', '#7cc576', '#f6efe4'];

  var STORAGE_KEY = 'quien_es_mas_probable_players_v1';
  var MIN_PLAYERS = 2;
  var MAX_PLAYERS = 20;
  var MAX_NAME = 16;
  var HANDOFF_DELAY = 550;
  var LEAVE_DELAY = 220;

  var state = {
    players: [],
    mode: null,
    deck: [],
    current: null,
    round: 0,
    total: 0,
    roundVotes: [],
    totalVotes: [],
    votesCast: 0,
    phase: 'idle',
    locked: false,
    timer: null,
    confettiTimer: null,
    pendingMode: null,
    adultOk: false
  };

  /* ---------- Referencias al DOM ---------- */
  var screens = {
    setup: document.getElementById('screen-setup'),
    modes: document.getElementById('screen-modes'),
    game: document.getElementById('screen-game'),
    final: document.getElementById('screen-final')
  };
  var confettiLayer = document.getElementById('confetti');
  var addRow = document.getElementById('add-row');
  var playerInput = document.getElementById('player-input');
  var btnAdd = document.getElementById('btn-add');
  var btnContinue = document.getElementById('btn-continue');
  var playerList = document.getElementById('player-list');
  var setupHint = document.getElementById('setup-hint');

  var modeBadge = document.getElementById('mode-badge');
  var roundCounter = document.getElementById('round-counter');
  var questionCard = document.getElementById('question-card');
  var questionText = document.getElementById('question-text');

  var votePanel = document.getElementById('vote-panel');
  var turnCard = document.getElementById('turn-card');
  var turnLabel = document.getElementById('turn-label');
  var turnName = document.getElementById('turn-name');
  var voteCounter = document.getElementById('vote-counter');
  var voteProgress = document.getElementById('vote-progress');
  var voteProgressFill = document.getElementById('vote-progress-fill');
  var voteGrid = document.getElementById('vote-grid');

  var resultPanel = document.getElementById('result-panel');
  var resultCard = document.getElementById('result-card');
  var resultTitle = document.getElementById('result-title');
  var resultNames = document.getElementById('result-names');
  var resultSub = document.getElementById('result-sub');
  var resultList = document.getElementById('result-list');

  var btnResult = document.getElementById('btn-result');
  var btnNext = document.getElementById('btn-next');

  var finalKicker = document.getElementById('final-kicker');
  var finalName = document.getElementById('final-name');
  var finalVotes = document.getElementById('final-votes');
  var finalList = document.getElementById('final-list');
  var btnReplay = document.getElementById('btn-replay');
  var btnFinalModes = document.getElementById('btn-final-modes');

  var confirmModal = document.getElementById('confirm-modal');
  var confirmYes = document.getElementById('confirm-yes');
  var confirmNo = document.getElementById('confirm-no');

  /* ---------- Utilidades ---------- */
  function zeros(n) {
    var arr = [];
    for (var i = 0; i < n; i++) arr.push(0);
    return arr;
  }

  function joinNames(names) {
    if (names.length === 0) return '';
    if (names.length === 1) return names[0];
    if (names.length === 2) return names[0] + ' y ' + names[1];
    return names.slice(0, -1).join(', ') + ' y ' + names[names.length - 1];
  }

  function pluralVotes(n) {
    return n + (n === 1 ? ' voto' : ' votos');
  }

  function restartAnimation(element, className) {
    element.classList.remove(className);
    void element.offsetWidth;
    element.classList.add(className);
  }

  function vibrate(pattern) {
    if (navigator.vibrate) {
      try {
        navigator.vibrate(pattern);
      } catch (e) {
        /* vibración no disponible */
      }
    }
  }

  function prefersReducedMotion() {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  /* ---------- Confeti ---------- */
  function clearConfetti() {
    if (state.confettiTimer) {
      window.clearTimeout(state.confettiTimer);
      state.confettiTimer = null;
    }
    confettiLayer.innerHTML = '';
  }

  function burstConfetti(count) {
    if (prefersReducedMotion()) return;
    clearConfetti();

    for (var i = 0; i < count; i++) {
      var piece = document.createElement('span');
      piece.className = 'confetti-piece';
      piece.style.left = (Math.random() * 100).toFixed(1) + '%';
      piece.style.background = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
      piece.style.setProperty('--dx', Math.round((Math.random() - 0.5) * 180) + 'px');
      piece.style.setProperty('--rot', Math.round(Math.random() * 900 - 300) + 'deg');
      piece.style.animationDuration = (1.8 + Math.random() * 1.4).toFixed(2) + 's';
      piece.style.animationDelay = (Math.random() * 0.35).toFixed(2) + 's';
      if (Math.random() < 0.35) {
        piece.style.width = '10px';
        piece.style.height = '10px';
        piece.style.borderRadius = '50%';
      }
      confettiLayer.appendChild(piece);
    }

    state.confettiTimer = window.setTimeout(function () {
      state.confettiTimer = null;
      confettiLayer.innerHTML = '';
    }, 4000);
  }

  /* ---------- Almacenamiento seguro ---------- */
  function loadPlayers() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      var parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      var result = [];
      for (var i = 0; i < parsed.length; i++) {
        if (typeof parsed[i] !== 'string') continue;
        var name = parsed[i].replace(/\s+/g, ' ').trim().slice(0, MAX_NAME);
        if (!name) continue;
        var exists = false;
        for (var j = 0; j < result.length; j++) {
          if (result[j].toLocaleLowerCase() === name.toLocaleLowerCase()) {
            exists = true;
            break;
          }
        }
        if (!exists && result.length < MAX_PLAYERS) result.push(name);
      }
      return result;
    } catch (e) {
      return [];
    }
  }

  function savePlayers() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.players));
    } catch (e) {
      /* almacenamiento no disponible: se ignora */
    }
  }

  /* ---------- Navegación ---------- */
  function showScreen(id) {
    Object.keys(screens).forEach(function (key) {
      screens[key].classList.toggle('active', key === id);
    });
    window.scrollTo(0, 0);
  }

  function navigate(id) {
    try {
      window.history.pushState({ screen: id }, '');
    } catch (e) {
      /* history no disponible */
    }
    showScreen(id);
  }

  function clearHandoffTimer() {
    if (state.timer) {
      window.clearTimeout(state.timer);
      state.timer = null;
    }
    state.locked = false;
  }

  function resetGame() {
    clearHandoffTimer();
    clearConfetti();
    state.deck = [];
    state.current = null;
    state.round = 0;
    state.total = 0;
    state.roundVotes = [];
    state.totalVotes = [];
    state.votesCast = 0;
    state.phase = 'idle';
  }

  function goBack() {
    if (window.history.state && window.history.state.screen && window.history.state.screen !== 'setup') {
      window.history.back();
    } else {
      resetGame();
      showScreen('setup');
    }
  }

  window.addEventListener('popstate', function (e) {
    var target = (e.state && e.state.screen) || 'setup';
    if (target === 'final') target = 'modes';
    if (target === 'game' && !state.current) target = 'modes';
    if (target === 'modes' && state.players.length < MIN_PLAYERS) target = 'setup';
    if (target !== 'game') resetGame();
    closeConfirm();
    showScreen(target);
  });

  /* ---------- Pantalla de jugadores ---------- */
  function setHint(text, type) {
    setupHint.textContent = text;
    setupHint.className = 'hint' + (type ? ' ' + type : '');
  }

  function shakeInput() {
    playerInput.classList.remove('shake');
    void playerInput.offsetWidth;
    playerInput.classList.add('shake');
    window.setTimeout(function () {
      playerInput.classList.remove('shake');
    }, 450);
  }

  function updateSetupUI() {
    var count = state.players.length;
    btnContinue.disabled = count < MIN_PLAYERS;
    if (count === 0) {
      setHint('Agrega al menos 2 jugadores para empezar.', '');
    } else if (count < MIN_PLAYERS) {
      var missing = MIN_PLAYERS - count;
      setHint('Falta ' + missing + ' jugador para empezar.', '');
    } else {
      setHint(count + ' jugadores listos. ¡A romperla! 🔥', 'ok');
    }
  }

  /* animate: 'all' (entrada escalonada), un número (solo ese jugador) o nada */
  function renderPlayers(animate) {
    playerList.innerHTML = '';
    state.players.forEach(function (name, index) {
      var li = document.createElement('li');
      li.className = 'player-item';
      li.style.setProperty('--c', PLAYER_COLORS[index % PLAYER_COLORS.length]);

      if (animate === 'all') {
        li.classList.add('enter');
        li.style.animationDelay = (index * 60) + 'ms';
      } else if (typeof animate === 'number' && animate === index) {
        li.classList.add('enter');
      }

      var label = document.createElement('span');
      label.className = 'player-name';
      label.textContent = name;

      var remove = document.createElement('button');
      remove.type = 'button';
      remove.className = 'player-remove';
      remove.textContent = '✕';
      remove.setAttribute('aria-label', 'Quitar a ' + name);
      remove.addEventListener('click', function () {
        removePlayer(name, li);
      });

      li.appendChild(label);
      li.appendChild(remove);
      playerList.appendChild(li);
    });
    updateSetupUI();
  }

  function addPlayer() {
    var name = playerInput.value.replace(/\s+/g, ' ').trim().slice(0, MAX_NAME);
    if (!name) {
      setHint('Escribe un nombre primero.', 'error');
      shakeInput();
      playerInput.focus();
      return;
    }
    if (state.players.length >= MAX_PLAYERS) {
      setHint('Máximo ' + MAX_PLAYERS + ' jugadores.', 'error');
      shakeInput();
      return;
    }
    var lower = name.toLocaleLowerCase();
    for (var i = 0; i < state.players.length; i++) {
      if (state.players[i].toLocaleLowerCase() === lower) {
        setHint('Ese nombre ya está en la lista.', 'error');
        shakeInput();
        return;
      }
    }
    state.players.push(name);
    playerInput.value = '';
    savePlayers();
    renderPlayers(state.players.length - 1);
    playerInput.focus();
  }

  function removePlayer(name, li) {
    if (li) {
      if (li.classList.contains('leaving')) return;
      li.classList.add('leaving');
    }
    window.setTimeout(function () {
      var index = state.players.indexOf(name);
      if (index === -1) return;
      state.players.splice(index, 1);
      savePlayers();
      renderPlayers();
    }, li ? LEAVE_DELAY : 0);
  }

  /* ---------- Modos ---------- */
  function requestMode(modeKey) {
    if (!QUESTIONS[modeKey]) return;
    if (state.players.length < MIN_PLAYERS) {
      showScreen('setup');
      return;
    }
    if (modeKey === 'hot' && !state.adultOk) {
      state.pendingMode = modeKey;
      confirmModal.hidden = false;
      return;
    }
    beginGame(modeKey);
  }

  function closeConfirm() {
    confirmModal.hidden = true;
    state.pendingMode = null;
  }

  /* ---------- Ranking visual (ronda y final) ---------- */
  function renderRanking(listEl, votes, startDelay) {
    listEl.innerHTML = '';
    var order = [];
    var i;
    for (i = 0; i < state.players.length; i++) order.push(i);
    order.sort(function (a, b) {
      if (votes[b] !== votes[a]) return votes[b] - votes[a];
      return a - b;
    });
    var max = order.length > 0 ? votes[order[0]] : 0;
    var fills = [];

    order.forEach(function (idx, pos) {
      var li = document.createElement('li');
      li.className = 'rank-item' + (max > 0 && votes[idx] === max ? ' top' : '');
      li.style.setProperty('--c', PLAYER_COLORS[idx % PLAYER_COLORS.length]);
      li.style.setProperty('--i', String(pos));

      var name = document.createElement('span');
      name.className = 'rank-name';
      name.textContent = state.players[idx];

      var bar = document.createElement('span');
      bar.className = 'rank-bar';
      var fill = document.createElement('span');
      fill.className = 'rank-fill';
      bar.appendChild(fill);

      var count = document.createElement('span');
      count.className = 'rank-count';
      count.textContent = String(votes[idx]);

      li.appendChild(name);
      li.appendChild(bar);
      li.appendChild(count);
      listEl.appendChild(li);

      fills.push({ el: fill, pct: max > 0 ? Math.round((votes[idx] / max) * 100) : 0 });
    });

    window.setTimeout(function () {
      fills.forEach(function (f) {
        f.el.style.width = f.pct + '%';
      });
    }, startDelay || 40);
  }

  /* ---------- Juego ---------- */
  function buildDeck(modeKey) {
    var deck = QUESTIONS[modeKey].slice();
    for (var i = deck.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = deck[i];
      deck[i] = deck[j];
      deck[j] = tmp;
    }
    return deck;
  }

  function buildVoteButtons() {
    voteGrid.innerHTML = '';
    state.players.forEach(function (name, index) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'vote-btn';
      btn.textContent = name;
      btn.style.setProperty('--c', PLAYER_COLORS[index % PLAYER_COLORS.length]);
      btn.addEventListener('click', function () {
        castVote(index, btn);
      });
      voteGrid.appendChild(btn);
    });
  }

  function setVoteButtonsDisabled(disabled) {
    var buttons = voteGrid.children;
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = disabled;
    }
  }

  function popVoteButtons() {
    var buttons = voteGrid.children;
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('tap');
      buttons[i].style.animationDelay = (i * 45) + 'ms';
      restartAnimation(buttons[i], 'pop');
    }
  }

  function renderCounter() {
    var total = state.players.length;
    var complete = state.votesCast >= total;
    voteCounter.textContent = 'Votos: ' + state.votesCast + ' / ' + total;
    voteCounter.classList.toggle('full', complete);
    voteProgress.classList.toggle('full', complete);
    voteProgressFill.style.width = (total > 0 ? Math.round((state.votesCast / total) * 100) : 0) + '%';
  }

  function updateVoteUI() {
    var total = state.players.length;
    var complete = state.votesCast >= total;

    renderCounter();

    if (complete) {
      turnLabel.textContent = 'Todos votaron';
      turnName.textContent = '¡Listo! ✅';
    } else {
      turnLabel.textContent = 'Le toca votar a';
      turnName.textContent = state.players[state.votesCast];
    }
    restartAnimation(turnCard, 'swap');

    setVoteButtonsDisabled(complete);
    btnResult.hidden = !complete;
  }

  function renderRound() {
    questionText.textContent = state.current;
    roundCounter.textContent = state.round + ' / ' + state.total;
    questionCard.classList.remove('compact');
    restartAnimation(questionCard, 'enter');

    votePanel.hidden = false;
    resultPanel.hidden = true;
    btnNext.hidden = true;
    btnResult.hidden = true;
    updateVoteUI();
    popVoteButtons();
    window.scrollTo(0, 0);
  }

  function nextRound() {
    if (state.deck.length === 0) return;
    clearHandoffTimer();
    state.current = state.deck.pop();
    state.round += 1;
    state.roundVotes = zeros(state.players.length);
    state.votesCast = 0;
    state.phase = 'voting';
    renderRound();
  }

  function beginGame(modeKey) {
    closeConfirm();
    if (modeKey === 'hot') state.adultOk = true;

    resetGame();
    state.mode = modeKey;
    state.total = QUESTIONS[modeKey].length;
    state.deck = buildDeck(modeKey);
    state.totalVotes = zeros(state.players.length);

    var info = MODES[modeKey];
    modeBadge.textContent = info.label;
    screens.game.style.setProperty('--c', info.color);
    screens.final.style.setProperty('--c', info.color);

    buildVoteButtons();
    nextRound();
    navigate('game');
  }

  /* Voto anónimo por turnos: solo se guarda cuántos votos recibe cada jugador,
     nunca quién votó a quién. */
  function castVote(index, btn) {
    if (state.phase !== 'voting' || state.locked) return;
    if (state.votesCast >= state.players.length) return;
    if (index < 0 || index >= state.players.length) return;

    state.roundVotes[index] += 1;
    state.votesCast += 1;
    state.locked = true;

    vibrate(25);
    if (btn) {
      btn.style.animationDelay = '0s';
      restartAnimation(btn, 'tap');
    }
    renderCounter();
    restartAnimation(voteCounter, 'bump');

    setVoteButtonsDisabled(true);
    turnLabel.textContent = 'Voto guardado 🤫';
    turnName.textContent = 'Pasa el cel…';
    restartAnimation(turnCard, 'swap');

    state.timer = window.setTimeout(function () {
      state.timer = null;
      state.locked = false;
      if (state.phase === 'voting') updateVoteUI();
    }, HANDOFF_DELAY);
  }

  function showResult() {
    if (state.phase !== 'voting' || state.locked) return;
    if (state.votesCast < state.players.length) return;

    state.phase = 'result';

    var max = 0;
    var i;
    for (i = 0; i < state.roundVotes.length; i++) {
      if (state.roundVotes[i] > max) max = state.roundVotes[i];
    }

    var winners = [];
    for (i = 0; i < state.roundVotes.length; i++) {
      state.totalVotes[i] += state.roundVotes[i];
      if (state.roundVotes[i] === max) winners.push(state.players[i]);
    }

    if (winners.length === 1) {
      resultTitle.textContent = '🏆 Ganó la ronda';
      resultSub.textContent = 'con ' + pluralVotes(max);
    } else {
      resultTitle.textContent = '🤝 Empate en la ronda';
      resultSub.textContent = 'empatados con ' + pluralVotes(max) + ' cada uno';
    }
    resultNames.textContent = joinNames(winners);
    restartAnimation(resultCard, 'enter');

    renderRanking(resultList, state.roundVotes, 450);

    btnNext.textContent = state.deck.length === 0 ? 'Ver Final 🏆' : 'Siguiente Pregunta →';

    questionCard.classList.add('compact');
    votePanel.hidden = true;
    resultPanel.hidden = false;
    btnResult.hidden = true;
    btnNext.hidden = false;
    vibrate(40);
    burstConfetti(winners.length === 1 ? 36 : 24);
    window.scrollTo(0, 0);
  }

  function showFinal() {
    state.phase = 'over';

    var max = 0;
    var i;
    for (i = 0; i < state.totalVotes.length; i++) {
      if (state.totalVotes[i] > max) max = state.totalVotes[i];
    }

    var leaders = [];
    for (i = 0; i < state.totalVotes.length; i++) {
      if (state.totalVotes[i] === max) leaders.push(state.players[i]);
    }

    if (leaders.length === 1) {
      finalKicker.textContent = 'El más votado de la noche';
      finalVotes.textContent = pluralVotes(max) + ' en total';
    } else {
      finalKicker.textContent = 'Los más votados de la noche';
      finalVotes.textContent = pluralVotes(max) + ' cada uno';
    }
    finalName.textContent = joinNames(leaders);

    renderRanking(finalList, state.totalVotes, 900);

    try {
      window.history.replaceState({ screen: 'final' }, '');
    } catch (e) {
      /* history no disponible */
    }
    vibrate([60, 40, 60]);
    showScreen('final');
    burstConfetti(80);
  }

  /* ---------- Eventos ---------- */
  btnAdd.addEventListener('click', addPlayer);

  playerInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      addPlayer();
    }
  });

  playerInput.addEventListener('input', function () {
    if (setupHint.classList.contains('error')) updateSetupUI();
  });

  playerInput.addEventListener('focus', function () {
    window.setTimeout(function () {
      try {
        playerInput.scrollIntoView({ block: 'center', behavior: 'smooth' });
      } catch (e) {
        /* scrollIntoView no disponible */
      }
    }, 300);
  });

  addRow.addEventListener('click', function (e) {
    if (e.target === addRow) playerInput.focus();
  });

  btnContinue.addEventListener('click', function () {
    if (state.players.length < MIN_PLAYERS) {
      updateSetupUI();
      return;
    }
    playerInput.blur();
    navigate('modes');
  });

  var modeButtons = document.querySelectorAll('.mode-card');
  Array.prototype.forEach.call(modeButtons, function (card) {
    card.addEventListener('click', function () {
      requestMode(card.getAttribute('data-mode'));
    });
  });

  var backButtons = document.querySelectorAll('[data-action="back"]');
  Array.prototype.forEach.call(backButtons, function (b) {
    b.addEventListener('click', goBack);
  });

  btnResult.addEventListener('click', showResult);

  btnNext.addEventListener('click', function () {
    if (state.phase !== 'result') return;
    if (state.deck.length === 0) {
      showFinal();
    } else {
      nextRound();
    }
  });

  btnReplay.addEventListener('click', function () {
    if (!state.mode || !QUESTIONS[state.mode]) {
      resetGame();
      navigate('modes');
      return;
    }
    beginGame(state.mode);
  });

  btnFinalModes.addEventListener('click', function () {
    resetGame();
    navigate('modes');
  });

  confirmYes.addEventListener('click', function () {
    var mode = state.pendingMode;
    state.adultOk = true;
    closeConfirm();
    if (mode) beginGame(mode);
  });

  confirmNo.addEventListener('click', closeConfirm);

  confirmModal.addEventListener('click', function (e) {
    if (e.target === confirmModal) closeConfirm();
  });

  /* ---------- Inicio ---------- */
  state.players = loadPlayers();
  renderPlayers('all');
  showScreen('setup');
  try {
    window.history.replaceState({ screen: 'setup' }, '');
  } catch (e) {
    /* history no disponible */
  }

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () {
        /* sin service worker la app sigue funcionando online */
      });
    });
  }
})();