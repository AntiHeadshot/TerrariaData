'use strict';

// Code goes here
var app = angular.module('terraria', []);

// adding Controller to app
app.controller('terrariacontroller', function ($scope) {

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
      },
      function (xhr) {
          console.error(xhr);
      }
    );
    loadJSON('reciept.json',
      function (data) {
          data.forEach(function (obj) {
              $scope.reciepts.push(obj);
          });

          $scope.reciepts.forEach(function (obj) {
              if (obj.result.itemID >= 0)
                  $scope.objects[obj.result.itemID].reciepts.push(obj);
              obj.ingredients.forEach(function(ingr) {
                  $scope.objects[ingr.itemID].ingredientFor.push(obj);
              });
          });

          $scope.$apply();
      },
      function (xhr) {
          console.error(xhr);
      }
    );

});