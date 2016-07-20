'use strict';

// Code goes here
var app = angular.module('terraria', []);

// adding Controller to app
app.controller('terrariacontroller', function ($scope) {

    $scope.selected = 0;

    $scope.setSelected = function (obj) {
        $scope.selected = obj;
    };

    $scope.objects = [];
    $scope.reciepts = [];
    $scope.filter = {};

    $scope.rarity = {};
    $scope.rarity["0"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/8/85/Rarity_color_0_big.png";
    $scope.rarity["1"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/e/ed/Rarity_color_1_big.png";
    $scope.rarity["2"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/3/39/Rarity_color_2_big.png";
    $scope.rarity["3"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/1/18/Rarity_color_3_big.png";
    $scope.rarity["4"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/c/ca/Rarity_color_4_big.png";
    $scope.rarity["5"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/3/3e/Rarity_color_5_big.png";
    $scope.rarity["6"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/9/96/Rarity_color_6_big.png";
    $scope.rarity["7"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/9/9f/Rarity_color_7_big.png";
    $scope.rarity["8"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/9/92/Rarity_color_8_big.png";
    $scope.rarity["9"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/8/88/Rarity_color_9_big.png";
    $scope.rarity["10"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/1/16/Rarity_color_10_big.png";
    $scope.rarity["11"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/e/e1/Rarity_color_11_big.png";
    $scope.rarity["Rainbow"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/a/a5/Rarity_color_rainbow_big.gif";
    $scope.rarity["Quest"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/6/66/Rarity_color_quest_big.png";

    $scope.station = {};
    $scope.station["Ancient Manipulator"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/e/e2/Ancient_Manipulator.png?version=1522f1d153e55775b2c35144ba644f8c";
    $scope.station["Autohammer"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/3/33/Autohammer.png?version=3b9d46aa99d000563bdcd154f596a6f3";
    $scope.station["Blend-O-Matic"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/1/17/Blend-O-Matic.png?version=e7e3150bb63e026b8719061b2ad02e2b";
    $scope.station["Bone Welder"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/0/09/Bone_Welder.png?version=631d10c66ab05840dc50d7e45a402c25";
    $scope.station["Bookcase"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/5/52/Bookcase.png?version=f73e790da82d362a9976352571c33e47";
    $scope.station["By Hand"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/4/46/Slap_Hand.png?version=c97f49e7f9d6eeef191bf085e2855953";
    $scope.station["Cooking Pot"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/f/f9/Cooking_Pot.png?version=3d8ee64e442d0f0139b8389d1874a959";
    $scope.station["Demon/Crimson Altar"] = "images/demonaltar.png";
    $scope.station["Dye Vat"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/5/50/Dye_Vat.png?version=861bda17e27e1278d9d4af3811449eda";
    $scope.station["Furnace"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/0/0f/Furnace.png?version=de95b2258594fee0c21afaf8e7e6edd6";
    $scope.station["Heavy Work Bench"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/9/91/Heavy_Work_Bench.png?version=bbe13dda2f4c76db34ddedbbc187e8ed";
    $scope.station["Hellforge"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/6/67/Hellforge.png?version=922d3523e9052658c289ffca9af41b67";
    $scope.station["Honey"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/d/da/Honey_Bucket.png?version=bc7b55d217555f4eeb2f905fac0621d9";
    $scope.station["Honey Dispenser"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/9/91/Honey_Dispenser.png?version=c1fd46c5f95a14d114822753ef2cf9ef";
    $scope.station["Imbuing Station"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/6/6a/Imbuing_Station.png?version=320735c6b0b4322c40e1ff587c0868d2";
    $scope.station["Keg"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/7/7c/Keg.png?version=db43991c38f36270eccad70924ad4c29";
    $scope.station["Living Loom"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/9/9b/Living_Loom.png?version=1c75ee082676f9b6481f10ae9f5eba3c";
    $scope.station["Loom"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/3/3b/Loom.png?version=4776ecdd618ff466e43459d11b684f00";
    $scope.station["Meat Grinder"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/5/5a/Meat_Grinder.png?version=a7959cc29d265e82e216450eb26908cd";
    $scope.station["Sawmill"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/4/4a/Sawmill.png?version=717a6c0c5993e8fb1e0d1b0b7b0b0979";
    $scope.station["Sky Mill"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/8/87/Sky_Mill.png?version=c0b0310df11d08e9d49bd76a30af3b11";
    $scope.station["Solidifier"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/a/a8/Solidifier.png?version=9e38856b731fffb6f8a2a53fbc12a022";
    $scope.station["Tinkerer's Workshop"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/1/17/Tinkerer%27s_Workshop.png?version=656c611133c973ba44eaedc3e01674f5";
    $scope.station["Water"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/d/d3/Water_Bucket.png?version=615472bd5597cc9778d663ff30534578";
    $scope.station["Work Bench"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/9/91/Work_Bench.png?version=3259628e225e63358448fad407d3e800";
    $scope.station["Chair"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/0/0c/Wooden_Table-tiles.png?version=eb37961a841103174ad7890ef1a68d8b";
    $scope.station["Crystal Ball"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/e/e2/Crystal_Ball.png?version=bbce62f09094a5f08172df9fbe380567";
    $scope.station["Iron Anvil"] = "images/ironanvil.png";
    $scope.station["Placed Bottle"] = "https://hydra-media.cursecdn.com/terraria.gamepedia.com/4/40/Bottle_%28crafting_station%29.png?version=36ef15aca9efcd1534dfbce47f94f185";
    $scope.station["Titanium Forge"] = "images/titaniumforge.png";
    $scope.station["Mythril Anvil"] = "images/mythrilanvil.png";

    function loadJSON(path, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    if (success)
                        success(JSON.parse(xhr.responseText));
                } else {
                    if (error)
                        error(xhr);
                }
            }
        };
        xhr.open("GET", path, true);
        xhr.send();
    }

    loadJSON('data.json',
      function (data) {
          data.forEach(function (obj) {
              $scope.objects.push(obj);
          });

          $scope.objects.forEach(function (obj) {
              obj.reciepts = [];
              obj.ingredientFor = [];
          });

          loadJSON('reciept.json',
            function (data) {
                data.forEach(function (obj) {
                    $scope.reciepts.push(obj);
                });

                $scope.reciepts.forEach(function (obj) {
                    if (obj.result.itemID >= 0)
                        $scope.objects[obj.result.itemID].reciepts.push(obj);
                    obj.ingredients.forEach(function (ingr) {
                        $scope.objects[ingr.itemID].ingredientFor.push({ 'reciept':obj,'ammount': ingr.ammount });
                    });
                });

                var distinct = {};
                $scope.reciepts.forEach(function(obj) { distinct[obj.station] = true; });
                for(var prop in distinct)
                    console.log(prop);

                $scope.$apply();
            },
            function (xhr) {
                console.error(xhr);
            }
    );
      },
      function (xhr) {
          console.error(xhr);
      }
    );

});