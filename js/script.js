	  var selectedHero;
  var canSelect = true;

  var heroes = [
    // Abaddon
    {
      'heroName':'abaddon',
      'primaryAttribute':'strength',
      'allegiance':'dire',
      'tavernPosition': 15,
      'ratings': {
        'damage': 4,
      },
      'weaknesses': {
        
      }
    },
    // Alchemist
    {
      'heroName':'alchemist',
      'primaryAttribute':'strength',
      'allegiance':'radiant',
      'tavernPosition': 10
    },
    // Ancient Apparition
    {
      'heroName':'ancient_apparition',
      'primaryAttribute':'intelligence',
      'allegiance':'dire',
      'tavernPosition': 15
    },
    // Anti-mage
    {
      'heroName':'antimage',
      'primaryAttribute':'agility',
      'allegiance':'radiant',
      'tavernPosition': 1
    }, 
    // Arc Warden
    {
      'heroName':'arc_warden',
      'primaryAttribute':'agility',
      'allegiance':'dire',
      'tavernPosition': 17
    },
    // Axe
    {
      'heroName':'axe',
      'primaryAttribute':'strength',
      'allegiance':'dire',
      'tavernPosition': 1
    }, 
    // Bane
    {
      'heroName':'bane',
      'primaryAttribute':'intelligence',
      'allegiance':'dire',
      'tavernPosition': 1
    },
    // Batrider
    {
      'heroName':'batrider',
      'primaryAttribute':'intelligence',
      'allegiance':'dire',
      'tavernPosition': 14
    },
    // Beastmaster
    {
      'heroName':'beastmaster',
      'primaryAttribute':'strength',
      'allegiance':'radiant',
      'tavernPosition': 5
    },
    // Bloodseeker
    {
      'heroName':'bloodseeker',
      'primaryAttribute':'agility',
      'allegiance':'dire',
      'tavernPosition': 1
    },
    // Bounty Hunter
    {
      'heroName':'bounty_hunter',
      'primaryAttribute':'agility',
      'allegiance':'radiant',
      'tavernPosition': 12
    }, 
    // Brewmaster
    {
      'heroName':'brewmaster',
      'primaryAttribute':'strength',
      'allegiance':'radiant',
      'tavernPosition': 11
    },
    // Bristleback
    {
      'heroName':'bristleback',
      'primaryAttribute':'strength',
      'allegiance':'radiant',
      'tavernPosition': 16
    },
    // Broodmother
    {
      'heroName':'broodmother',
      'primaryAttribute':'agility',
      'allegiance':'dire',
      'tavernPosition': 9
    },
    // Centaur Warrunner
    {
      'heroName':'centaur',
      'primaryAttribute':'strength',
      'allegiance':'radiant',
      'tavernPosition': 14
    },
    // Chaos Knight
    {
      'heroName':'chaos_knight',
      'primaryAttribute':'strength',
      'allegiance':'dire',
      'tavernPosition': 12
    },
    // Chen
    {
      'heroName':'chen',
      'primaryAttribute':'intelligence',
      'allegiance':'radiant',
      'tavernPosition': 12
    },
    // Clinkz
    {
      'heroName':'clinkz',
      'primaryAttribute':'agility',
      'allegiance':'dire',
      'tavernPosition': 8
    },
    // Clockwerk
    {
      'heroName':'rattletrap',
      'primaryAttribute':'strength',
      'allegiance':'radiant',
      'tavernPosition': 7
    }, 
    // Crystal Maiden
    {
      'heroName':'crystal_maiden',
      'primaryAttribute':'intelligence',
      'allegiance':'radiant',
      'tavernPosition': 1
    },
    // Dark Seer
    {
      'heroName':'dark_seer',
      'primaryAttribute':'intelligence',
      'allegiance':'dire',
      'tavernPosition': 13
    },
    // Dazzle
    {
      'heroName':'dazzle',
      'primaryAttribute':'intelligence',
      'allegiance':'dire',
      'tavernPosition': 11
    },
    // Death Prophet
    {
      'heroName':'death_prophet',
      'primaryAttribute':'intelligence',
      'allegiance':'dire',
      'tavernPosition': 9
    },
    // Disruptor
    {
      'heroName':'disruptor',
      'primaryAttribute':'intelligence',
      'allegiance':'radiant',
      'tavernPosition': 16
    },
    // Doom
    {
      'heroName':'doom_bringer',
      'primaryAttribute':'strength',
      'allegiance':'dire',
      'tavernPosition': 9
    }, 
    // Dragon Knight
    {
      'heroName':'dragon_knight',
      'primaryAttribute':'strength',
      'allegiance':'radiant',
      'tavernPosition': 6
    },
    // Drow Ranger
    {
      'heroName':'drow_ranger',
      'primaryAttribute':'agility',
      'allegiance':'radiant',
      'tavernPosition': 2
    },
    // Earth Spirit
    {
      'heroName':'earth_spirit',
      'primaryAttribute':'strength',
      'allegiance':'radiant',
      'tavernPosition': 20
    },
    // Earthshaker
    {
      'heroName':'earthshaker',
      'primaryAttribute':'strength',
      'allegiance':'radiant',
      'tavernPosition': 1
    },
    // Elder Titan
    {
      'heroName':'elder_titan',
      'primaryAttribute':'strength',
      'allegiance':'radiant',
      'tavernPosition': 18
    },  
    // Ember Spirit
    {
      'heroName':'ember_spirit',
      'primaryAttribute':'agility',
      'allegiance':'radiant',
      'tavernPosition': 18
    },
    // Enchantress
    {
      'heroName':'enchantress',
      'primaryAttribute':'intelligence',
      'allegiance':'radiant',
      'tavernPosition': 10
    },
    // Enigma
    {
      'heroName':'enigma',
      'primaryAttribute':'intelligence',
      'allegiance':'dire',
      'tavernPosition': 5
    },
    // Faceless Void
    {
      'heroName':'faceless_void',
      'primaryAttribute':'agility',
      'allegiance':'dire',
      'tavernPosition': 5
    },
    // Gyrocopter
    {
      'heroName':'gyrocopter',
      'primaryAttribute':'agility',
      'allegiance':'radiant',
      'tavernPosition': 14
    },
    // Huskar
    {
      'heroName':'huskar',
      'primaryAttribute':'strength',
      'allegiance':'radiant',
      'tavernPosition': 9
    },
    // Invoker
    {
      'heroName':'invoker',
      'primaryAttribute':'intelligence',
      'allegiance':'dire',
      'tavernPosition': 16
    },
    // Io
    {
      'heroName':'wisp',
      'primaryAttribute':'strength',
      'allegiance':'radiant',
      'tavernPosition': 13
    },
    // Jakiro
    {
      'heroName':'jakiro',
      'primaryAttribute':'intelligence',
      'allegiance':'radiant',
      'tavernPosition': 11
    },
    // Juggernaut
    {
      'heroName':'juggernaut',
      'primaryAttribute':'agility',
      'allegiance':'radiant',
      'tavernPosition': 3
    },
    // Keeper of the Light
    {
      'heroName':'keeper_of_the_light',
      'primaryAttribute':'intelligence',
      'allegiance':'radiant',
      'tavernPosition': 17
    },
    // Kunkka
    {
      'heroName':'kunkka',
      'primaryAttribute':'strength',
      'allegiance':'radiant',
      'tavernPosition': 4
    },
    // Legion Commander
    {
      'heroName':'legion_commander',
      'primaryAttribute':'strength',
      'allegiance':'radiant',
      'tavernPosition': 19
    },
    // Leshrac
    {
      'heroName':'leshrac',
      'primaryAttribute':'intelligence',
      'allegiance':'dire',
      'tavernPosition': 12
    },
    // Lich
    {
      'heroName':'lich',
      'primaryAttribute':'intelligence',
      'allegiance':'dire',
      'tavernPosition': 2
    },
    // Lifestealer
    {
      'heroName':'life_stealer',
      'primaryAttribute':'strength',
      'allegiance':'dire',
      'tavernPosition': 7
    },
    // Lina
    {
      'heroName':'lina',
      'primaryAttribute':'intelligence',
      'allegiance':'radiant',
      'tavernPosition': 6
    },
    // Lion
    {
      'heroName':'lion',
      'primaryAttribute':'intelligence',
      'allegiance':'dire',
      'tavernPosition': 3
    },
    // Lone Druid
    {
      'heroName':'lone_druid',
      'primaryAttribute':'agility',
      'allegiance':'radiant',
      'tavernPosition': 15
    },
    // Luna
    {
      'heroName':'luna',
      'primaryAttribute':'agility',
      'allegiance':'radiant',
      'tavernPosition': 11
    },
    // Lycan
    {
      'heroName':'lycan',
      'primaryAttribute':'strength',
      'allegiance':'dire',
      'tavernPosition': 11
    },
    // Magnus
    {
      'heroName':'magnataur',
      'primaryAttribute':'strength',
      'allegiance':'dire',
      'tavernPosition': 14
    }, 
    // Medusa
    {
      'heroName':'medusa',
      'primaryAttribute':'agility',
      'allegiance':'dire',
      'tavernPosition': 15
    },
    // Meepo
    {
      'heroName':'meepo',
      'primaryAttribute':'agility',
      'allegiance':'dire',
      'tavernPosition': 12
    },
    // Mirana
    {
      'heroName':'mirana',
      'primaryAttribute':'agility',
      'allegiance':'radiant',
      'tavernPosition': 4
    },
    // Morphling
    {
      'heroName':'morphling',
      'primaryAttribute':'agility',
      'allegiance':'radiant',
      'tavernPosition': 5
    },
    // Naga Siren
    {
      'heroName':'naga_siren',
      'primaryAttribute':'agility',
      'allegiance':'radiant',
      'tavernPosition': 16
    },
    // Nature's Prophet
    {
      'heroName':'furion',
      'primaryAttribute':'intelligence',
      'allegiance':'radiant',
      'tavernPosition': 9
    },
    // Necrophos
    {
      'heroName':'necrolyte',
      'primaryAttribute':'intelligence',
      'allegiance':'dire',
      'tavernPosition': 6
    }, 
    // Night Stalker
    {
      'heroName':'night_stalker',
      'primaryAttribute':'strength',
      'allegiance':'dire',
      'tavernPosition': 8
    },
    // Nyx Assassin
    {
      'heroName':'nyx_assassin',
      'primaryAttribute':'agility',
      'allegiance':'dire',
      'tavernPosition': 13
    },
    // Ogre Magi
    {
      'heroName':'ogre_magi',
      'primaryAttribute':'intelligence',
      'allegiance':'radiant',
      'tavernPosition': 14
    },
    // Omniknight
    {
      'heroName':'omniknight',
      'primaryAttribute':'strength',
      'allegiance':'radiant',
      'tavernPosition': 8
    },
    // Oracle
    {
      'heroName':'oracle',
      'primaryAttribute':'intelligence',
      'allegiance':'radiant',
      'tavernPosition': 19
    },
    // Outworld Devourer
    {
      'heroName':'obsidian_destroyer',
      'primaryAttribute':'intelligence',
      'allegiance':'dire',
      'tavernPosition': 17
    }, 
    // Phantom Assassin
    {
      'heroName':'phantom_assassin',
      'primaryAttribute':'agility',
      'allegiance':'dire',
      'tavernPosition': 6
    },
    // Phantom Lancer
    {
      'heroName':'phantom_lancer',
      'primaryAttribute':'agility',
      'allegiance':'radiant',
      'tavernPosition': 6
    },
    // Phoenix
    {
      'heroName':'phoenix',
      'primaryAttribute':'strength',
      'allegiance':'radiant',
      'tavernPosition': 21
    },
    // Pit Lord
  /*{
  		'heroName':'pit_lord',
      'primaryAttribute':'strength',
      'allegiance':'dire',
      'tavernPosition': 15
    },*/
    // Puck
    {
      'heroName':'puck',
      'primaryAttribute':'intelligence',
      'allegiance':'radiant',
      'tavernPosition': 2
    },
    // Pudge
    {
      'heroName':'pudge',
      'primaryAttribute':'strength',
      'allegiance':'dire',
      'tavernPosition': 2
    },
    // Pugna
    {
      'heroName':'pugna',
      'primaryAttribute':'intelligence',
      'allegiance':'dire',
      'tavernPosition': 10
    },
    // Queen of Pain
    {
      'heroName':'queenofpain',
      'primaryAttribute':'intelligence',
      'allegiance':'dire',
      'tavernPosition': 8
    },
    // Razor
    {
      'heroName':'razor',
      'primaryAttribute':'agility',
      'allegiance':'dire',
      'tavernPosition': 3
    },
    // Riki
    {
      'heroName':'riki',
      'primaryAttribute':'agility',
      'allegiance':'radiant',
      'tavernPosition': 8
    },
    // Rubick
    {
      'heroName':'rubick',
      'primaryAttribute':'intelligence',
      'allegiance':'radiant',
      'tavernPosition': 15
    },
    // Sand King
    {
      'heroName':'sand_king',
      'primaryAttribute':'strength',
      'allegiance':'dire',
      'tavernPosition': 3
    },
    // Shadow Demon
    {
      'heroName':'shadow_demon',
      'primaryAttribute':'intelligence',
      'allegiance':'dire',
      'tavernPosition': 18
    },
    // Shadow Fiend
    {
      'heroName':'nevermore',
      'primaryAttribute':'agility',
      'allegiance':'dire',
      'tavernPosition': 2
    },
    // Shadow Shaman
    {
      'heroName':'shadow_shaman',
      'primaryAttribute':'intelligence',
      'allegiance':'radiant',
      'tavernPosition': 7
    },
    // Silencer
    {
      'heroName':'silencer',
      'primaryAttribute':'intelligence',
      'allegiance':'radiant',
      'tavernPosition': 13
    },
    // Skywrath Mage
    {
      'heroName':'skywrath_mage',
      'primaryAttribute':'intelligence',
      'allegiance':'radiant',
      'tavernPosition': 18
    },
    // Slardar
    {
      'heroName':'slardar',
      'primaryAttribute':'strength',
      'allegiance':'dire',
      'tavernPosition': 4
    },
    // Slark
    {
      'heroName':'slark',
      'primaryAttribute':'agility',
      'allegiance':'dire',
      'tavernPosition': 14
    },
    // Sniper
    {
      'heroName':'sniper',
      'primaryAttribute':'agility',
      'allegiance':'radiant',
      'tavernPosition': 9
    },
    // Spectre
    {
      'heroName':'spectre',
      'primaryAttribute':'agility',
      'allegiance':'dire',
      'tavernPosition': 11
    },
    // Spirit Breaker
    {
      'heroName':'spirit_breaker',
      'primaryAttribute':'strength',
      'allegiance':'dire',
      'tavernPosition': 10
    },
    // Storm Spirit
    {
      'heroName':'storm_spirit',
      'primaryAttribute':'intelligence',
      'allegiance':'radiant',
      'tavernPosition': 3
    },
    // Sven
    {
      'heroName':'sven',
      'primaryAttribute':'strength',
      'allegiance':'radiant',
      'tavernPosition': 2
    },
    // Techies
    {
      'heroName':'techies',
      'primaryAttribute':'intelligence',
      'allegiance':'radiant',
      'tavernPosition': 20
    },
    // Templar Assassin
    {
      'heroName':'templar_assassin',
      'primaryAttribute':'agility',
      'allegiance':'radiant',
      'tavernPosition': 10
    },
    // Terrorblade
    {
      'heroName':'terrorblade',
      'primaryAttribute':'agility',
      'allegiance':'dire',
      'tavernPosition': 16
    },
    // Tidehunter
    {
      'heroName':'tidehunter',
      'primaryAttribute':'strength',
      'allegiance':'dire',
      'tavernPosition': 5
    },
    // Timbersaw
    {
      'heroName':'shredder',
      'primaryAttribute':'strength',
      'allegiance':'radiant',
      'tavernPosition': 15
    },
    // Tinker
    {
      'heroName':'tinker',
      'primaryAttribute':'intelligence',
      'allegiance':'radiant',
      'tavernPosition': 8
    },
    // Tiny
    {
      'heroName':'tiny',
      'primaryAttribute':'strength',
      'allegiance':'radiant',
      'tavernPosition': 3
    },
    // Treant Protector
    {
      'heroName':'treant',
      'primaryAttribute':'strength',
      'allegiance':'radiant',
      'tavernPosition': 12
    },
    // Troll Warlord
    {
      'heroName':'troll_warlord',
      'primaryAttribute':'agility',
      'allegiance':'radiant',
      'tavernPosition': 17
    },
    // Tusk
    {
      'heroName':'tusk',
      'primaryAttribute':'strength',
      'allegiance':'radiant',
      'tavernPosition': 17
    },
    // Undying
    {
      'heroName':'undying',
      'primaryAttribute':'strength',
      'allegiance':'dire',
      'tavernPosition': 13
    },
    //Ursa
    {
      'heroName':'ursa',
      'primaryAttribute':'agility',
      'allegiance':'radiant',
      'tavernPosition': 13
    },
    // Vengeful Spirit
    {
      'heroName':'vengefulspirit',
      'primaryAttribute':'agility',
      'allegiance':'radiant',
      'tavernPosition': 7
    },
    // Venomancer
    {
      'heroName':'venomancer',
      'primaryAttribute':'agility',
      'allegiance':'dire',
      'tavernPosition': 4
    },
    // Viper
    {
      'heroName':'viper',
      'primaryAttribute':'agility',
      'allegiance':'dire',
      'tavernPosition': 7
    },
    // Visage
    {
      'heroName':'visage',
      'primaryAttribute':'intelligence',
      'allegiance':'dire',
      'tavernPosition': 19
    },
    // Warlock
    {
      'heroName':'warlock',
      'primaryAttribute':'intelligence',
      'allegiance':'dire',
      'tavernPosition': 7
    },
    // Weaver
    {
      'heroName':'weaver',
      'primaryAttribute':'agility',
      'allegiance':'dire',
      'tavernPosition': 10
    },
    // Windranger
    {
      'heroName':'windrunner',
      'primaryAttribute':'intelligence',
      'allegiance':'radiant',
      'tavernPosition': 4
    },
    // Winter Wyvern
    {
      'heroName':'winter_wyvern',
      'primaryAttribute':'intelligence',
      'allegiance':'dire',
      'tavernPosition': 20
    },
    // Witch Doctor
    {
      'heroName':'witch_doctor',
      'primaryAttribute':'intelligence',
      'allegiance':'dire',
      'tavernPosition': 4
    },
    // Wraith King
    {
      'heroName':'skeleton_king',
      'primaryAttribute':'strength',
      'allegiance':'dire',
      'tavernPosition': 6
    },
    // Zeus
    {
      'heroName':'zuus',
      'primaryAttribute':'intelligence',
      'allegiance':'radiant',
      'tavernPosition': 5
    }
  ];
  
  var stageCounter = 0;
  var stage = [
      'radiant-ban', 
      'dire-ban', 
      'radiant-ban',
      'dire-ban',
      'radiant-pick', 
      'dire-pick', 
      'dire-pick',
      'radiant-pick',
      'dire-ban', 
      'radiant-ban', 
      'dire-ban',
      'radiant-ban',
      'dire-pick', 
      'radiant-pick', 
      'dire-pick',
      'radiant-pick',
      'dire-ban',
      'radiant-ban',
      'radiant-pick', 
      'dire-pick',
    	'End Draft'
    ];
  
  var draftLog = [
    
  ];
  
  var removedHeroes = [];
  var radiantHeroes = [];
  var direHeroes = [];
  var bannedHeroes = [];
  
  function beginBuilder(){
    drawHeroesByTavern();
    prepareBuilder();
  }

  function drawAllHeroes() {
    var imageWell = document.createElement("div");
    for (var i = 0; i < heroes.length; i++) {
      // Create a new image
      var newImg = document.createElement("img");
      
      // Set it's properties accordingly
      newImg.setAttribute("src", getHeroImageURL(heroes[i]["heroName"]));
      newImg.setAttribute("class", "hero-grid-image");
      newImg.setAttribute("id", heroes[i]["heroName"]);
      newImg.setAttribute("onclick", "javascript:selectHero(id)");
      // Add it to the image well
      imageWell.appendChild(newImg);
    }
    document.body.appendChild(imageWell);

    $("#start-button").remove();
  }
  
  function drawHeroesByTavern(){
    var container = document.createElement("div");
    container.setAttribute("class", "container-fluid");
    document.body.appendChild(container);
    
    var topRow = document.createElement("div");
    var bottomRow = document.createElement("div");
    
    topRow.setAttribute("class", "row");
    topRow.setAttribute("id", "top-image-row");
    bottomRow.setAttribute("class", "row");
    bottomRow.setAttribute("id", "bottom-image-row");
    
    container.appendChild(topRow);
    container.appendChild(bottomRow);
   
    for (var i = 0; i < 6; i++){      
   		var tavern = document.createElement("div");
      tavern.setAttribute("class", "col-xs-4 col-sm-4 col-md-4 col-lg-4");
      var desiredAllegiance;
      var desiredAttribute;
      
      switch(i){
        case 0:
          desiredAllegiance = "radiant";
          desiredAttribute = "strength";
          break;
        case 1:
          desiredAllegiance = "radiant";
          desiredAttribute = "agility";
          break;
        case 2:
          desiredAllegiance = "radiant";
          desiredAttribute = "intelligence";
          break;
        case 3:
          desiredAllegiance = "dire";
          desiredAttribute = "strength";
          break;
        case 4:
          desiredAllegiance = "dire";
          desiredAttribute = "agility";
          break;
        case 5:
          desiredAllegiance = "dire";
          desiredAttribute = "intelligence";
          break;
      }
      
      tavern.setAttribute("id", desiredAllegiance + "-" + desiredAttribute);
      
      var tavernTitle = document.createElement("h3");
      tavernTitle.innerHTML = toTitleCase(desiredAllegiance + "-" + desiredAttribute);
      tavern.appendChild(tavernTitle);
      
      var heroSet = heroes.filter(function(hero){
        return (hero['allegiance'] === desiredAllegiance && 
                hero['primaryAttribute'] === desiredAttribute);
			});
      
      heroSet.sort(function(prev, curr){
        return prev['tavernPosition'] - curr['tavernPosition'];
      });
      
      for (var j = 0; j < heroSet.length; j++) {
        // Create a new image
        var newImg = document.createElement("img");

        // Set it's properties accordingly
        newImg.setAttribute("src", getHeroImageURL(heroSet[j]["heroName"]));
        newImg.setAttribute("class", "hero-grid-image");
        newImg.setAttribute("id", heroSet[j]["heroName"]);
        newImg.setAttribute("onclick", "javascript:selectHero(id)");

        // Add it to the tavern
        tavern.appendChild(newImg);        
      }
      
      if(i <= 2){
        topRow.appendChild(tavern);
      }
      else{
        bottomRow.appendChild(tavern);
      }
  	}
    
    $("#start-button").remove();
  }

  function getHeroImageURL(heroName) {
    return "http://cdn.dota2.com/apps/dota2/images/heroes/" + heroName + "_full.png?v=3513528?v=3513528";
  }

  function selectHero(heroID){
    if(!canSelect){
      return;
    }
    if(removedHeroes.indexOf(heroID) >= 0){
      return;
    }
    
    if(selectedHero !== null){
      deselectHero(); 
    }
    if(selectedHero !== heroID){
      $("#" + heroID).addClass("selected-hero");
      selectedHero = heroID;	
    }
  }
  
  function deselectHero(){
    if(selectedHero !== null){
      $("#" + selectedHero).removeClass("selected-hero");
    }
    selectedHero = null;
  }
  
  function prepareBuilder(){
    // Create fluid container for elements under heroes
    var container = document.createElement("div");
    container.setAttribute("class", "container-fluid");
    // Add container to document
		document.body.appendChild(container);   
    
    // Create draft status label
    var draftStatusText = document.createElement("h3");
    draftStatusText.setAttribute("id", "draft-status-text");
    draftStatusText.innerHTML = toTitleCase(stage[stageCounter]);
    // Add label to container
    container.appendChild(draftStatusText);
    
    // Create a row to center the button
    var row = document.createElement("div");
    row.setAttribute("class", "row");
    container.appendChild(row);
    
    // Create a button to pick/ban heroes
    var button = document.createElement("div");
    button.setAttribute("class", "text-center");
    row.appendChild(button);
    
    // Provide the button with functionality
    var selectButton = document.createElement("a");
    selectButton.setAttribute("class", "btn button-style ban-button-style");
    selectButton.setAttribute("id", "select-button");
    selectButton.setAttribute("onclick", "selectClickListener()");
    // All drafts initially ban, so we can default it to ban
    selectButton.innerHTML="Ban";
    // Add button functionality to button div
    button.appendChild(selectButton);
    
    var heroHolder = document.createElement("div");
    heroHolder.setAttribute("class", "row");
    
    // Radiant Team Display
    var radiantTeam = document.createElement("div");
    
    // Radiant Header Text
    var radiantTeamHeader = document.createElement("h3");    
    radiantTeamHeader.innerHTML = "Radiant";
    
    radiantTeam.appendChild(radiantTeamHeader);
    
    radiantTeam.setAttribute("id", "radiant-team");
    radiantTeam.setAttribute("class", "col-xs-4 col-sm-4 col-md-4 col-lg-4");
    
    // Banned Heroes Display
    var bannedHeroes = document.createElement("div");
    
    var bannedHeroesHeader = document.createElement("h3");
    bannedHeroesHeader.innerHTML = "Banned";
    
    bannedHeroes.appendChild(bannedHeroesHeader);
    
    bannedHeroes.setAttribute("id", "banned-heroes");
    bannedHeroes.setAttribute("class", "col-xs-4 col-sm-4 col-md-4 col-lg-4");
    
    // Dire Team Display
    var direTeam = document.createElement("div");
    
    var direTeamHeader = document.createElement("h3");
    direTeamHeader.innerHTML = "Dire";
    
    direTeam.appendChild(direTeamHeader);
    
    direTeam.setAttribute("id", "dire-team");
    direTeam.setAttribute("class", "col-xs-4 col-sm-4 col-md-4 col-lg-4");
    
    heroHolder.appendChild(radiantTeam);
    heroHolder.appendChild(bannedHeroes);
    heroHolder.appendChild(direTeam);
    
    container.appendChild(heroHolder);
  }
  
  function flipSelectButtonFunctionality(){
    if($("#select-button").hasClass("ban-button-style")){
      $("#select-button").removeClass("ban-button-style");
      $("#select-button").addClass("pick-button-style");
    } 
    else {
      $("#select-button").removeClass("pick-button-style");
      $("#select-button").addClass("ban-button-style");
    }
  }
  
  function selectClickListener(){
    var prestate = toTitleCase(stage[stageCounter].split("-")[1]);
    
    if(selectedHero === null || selectedHero === undefined){
      return;
    }    
    
    draftLog.push(["" + prestate.toLowerCase() + ":", "" + selectedHero]);
          
    $("#"+selectedHero).removeClass("selected-hero");
    
    if(prestate == "Pick"){
      if(stage[stageCounter].split("-")[0].toLowerCase() == "radiant"){
        $("#"+selectedHero).addClass("radiant-picked-hero"); 
        $("#radiant-team").append($("#"+selectedHero).clone());
        radiantHeroes.push(selectedHero);
      }
      else{        
      	$("#"+selectedHero).addClass("dire-picked-hero");
        $("#dire-team").append($("#"+selectedHero).clone());
        direHeroes.push(selectedHero);
      }
    }
    else if(prestate == "Ban"){
      $("#"+selectedHero).addClass("banned-hero");
      $("#banned-heroes").append($("#"+selectedHero).clone());
      bannedHeroes.push(selectedHero);
    }
    
    removedHeroes.push(selectedHero);
    deselectHero();
    
    stageCounter++;
    
    if(stageCounter !== (stage.length - 1)){
    var poststate = toTitleCase(stage[stageCounter].split("-")[1]);
    
    if(prestate != poststate){
      flipSelectButtonFunctionality();
    }
    
    var draftStatusText = toTitleCase(stage[stageCounter]);
    
    $("#select-button").html(poststate);
    
    $("#draft-status-text").html(draftStatusText);
      return;
    }
    else{
    	endDraft();
    }
  }
  
  function endDraft(){    
    $("#select-button").remove();
    $("#draft-status-text").html("End of Draft");
    canSelect = false;
  }
  
  function toTitleCase(str){
    var titled = "";
    
    for(var i = 0; i < str.length; i++){
      if(i === 0 || str[i-1] === "_" || str[i-1] === "-"){
        titled += str[i].toUpperCase();
        continue;
      }
      
      if(str[i] === "_" || str[i] === "-"){
        titled += " ";
        continue;
      }
      
      titled += str[i];
    }
    
    return titled;
  }

$(document).ready(function () {
  beginBuilder();
});