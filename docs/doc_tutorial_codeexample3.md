---
id: doc_tutorial_codeexample3
title: Пример кода с мультиаккаунтом
sidebar_label: Пример кода с мультиаккаунтом
---
```javascript
function randomInt() {
    return Math.floor(Math.random() * 2147483647.0);
};

onStart = function(a){
    accounts = Vk.getAccounts();
    accountsNames = new Array();
    accounts.forEach(function(element){
        accountsNames.push(element.name);
    });

    pickFromList("Выберите аккаунт, с которого будет отправлено сообщение", accountsNames, function(index){
        if(index == -1){
            finish();
            return;
        }
        fromAccount = accounts[index];

        pickFromList("Выберите аккаунт, на который будет отправлено сообщение", accountsNames, function(index2){
            if(index2 == -1){
                finish();
                return;
            }
            toAccount = accounts[index2];

            Vk.setAccount(fromAccount);
            Vk.call("messages.send", {peer_id: toAccount.id, message: "yo", random_id: randomInt()}, function(r){finish();});
        });
    });
};
```