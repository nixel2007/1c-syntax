## Документация по редакторам

* Sublime text - http://www.sublimetext.com/docs/3
* Atom - https://atom.io/docs
* VSC - https://code.visualstudio.com/Docs

## Разработка грамматик

* Описание формата грамматик (примеры в JSON): http://manual.macromates.com/en/language_grammars
* Описание формирования файла YAML, работа с пакетом `AAAPackageDev`: http://docs.sublimetext.info/en/latest/extensibility/syntaxdefs.html

*Рекомендация*:  
На данный момент разработку грамматик рекомендуется вести в редакторе
Sublime Text.

**Важно:**  
Если вашем редакторе установлен пакет `language-1c-bsl`, необходимо его
деактивировать или удалить через пакетный менеджер.  

### Редактирование в Sublime Text
* Установите пакет `AAAPackageDev` через пакетный менеджер
* Склонируйте репозиторий `1c-syntax` в папку
  `%AppData%\Roaming\Sublime Text 3\Packages\1c-syntax`
* Убедитесь, что подсветка 1С-синтаксиса заработала
* Откройте файл `1c.YAML-tmLanguage` и внесите свои изменения
* Выполните команду `Tools` -> `Build` (Ctrl + b). Если появится окно
  `Convert to ...`, выберите верхний вариант `Convert to ...`.
  Внизу должно открыться окно с информацией и текстом
  `No target format specified, searching in file... Property List`.
  Если вы допустили ошибку в файле YAML, то ошибка будет отражена там же.
* Изменения синтаксиса должны примениться автоматически. Если этого не
  произошло, попробуйте переоткрыть редактор
* Сделайте коммит и отправьте изменения файла `1c.YAML-tmLanguage` в основной
  репозиторий `1c-syntax`

### Редактирование в Atom

ToDo

### Редактирование в VSC

ToDo

## Разработка пакетов

### Общие положения

Функционал пакетов для каждого из редакторов должен развиваться равномерно.
Если для релиза v1.1.0 запланировано, например, добавление команд по запуску
скриптов `.os` в `onescript`, то данная функциональность должна появиться во
всех редакторах одновременно (за исключением случаев, когда принято решение о
невключении данного функционала в пакет какого-либо редактора).

По возможности разработку общего для всех редакторов функционала следует вести
в головном репозитории `1c-syntax` с последующим применением конвертеров и
билд-скриптов.

Действия по добавлению новой функциональности, специфичные для каждого из
редакторов должны разрабатываться в рамках feature-веток.
Изменения в основные ветки во всех репозиториях вливаются одновременно в рамках
подготовки к релизу.

В случае обнаружения специфичной для одного из редакторов ошибки допустимо
выпустить bug-fix релиз для одного из пакетов. При выпуске следующего общего
релиза номера версий приводятся к общему номеру.

### Документация по разработке пакетов

* Sublime text
  * Официальная https://www.sublimetext.com/docs/3/packages.html
  * Неофициальная, с примерами
    http://code.tutsplus.com/tutorials/how-to-create-a-sublime-text-2-plugin--net-22685
* Atom - https://atom.io/docs/v1.2.4/hacking-atom-package-word-count
* VSC - https://code.visualstudio.com/docs/extensions/overview

### Настройка окружения для разработки

**Важно:**  
Если вы разрабатываете пакет для *Atom* или *VSC*, в вашем редакторе установлен
пакет `language-1c-bsl`, и вы наталкиваетесь на неинтерпретируемые ошибки,
попробуйте деактивировать или удалить пакет через пакетный менеджер.

#### Sublime Text
* Склонируйте репозиторий `sublime-language-1c-bsl` в папку
  `%AppData%\Sublime Text 3\Packages\Language 1C (BSL)`

Средства отладки на официальном сайте не обозначены :)  
Попробуйте использовать внешние пакеты, например, [Plugin Debugger](https://packagecontrol.io/packages/Plugin%20Debugger).

#### Atom

* Склонируйте репозиторий `atom-language-1c-bsl` в папку
`%userprofile%\.atom\packages\atom-language-1c-bsl`  
* Откройте папку репозитория в Atom.

Подробную информацию об отладке можно найти в
[документации](https://atom.io/docs/v1.2.4/hacking-atom-debugging).

После внесения изменений в исходный код модуля, отлаживаемое приложение можно
перезапустить нажатием `Ctrl-Alt-R` или нажать соответствующую кнопку в панели
отладки).

#### VSC

* Склонируйте репозиторий `vsc-language-1c-bsl` в вашу рабочую папку.  
* Откройте папку репозитория в VSC.

Подробную информацию об отладке и возможных проблемах можно найти
[здесь](https://atom.io/docs/v1.2.4/hacking-atom-package-word-count#basic-debugging)
и [здесь](https://code.visualstudio.com/docs/extensions/debugging-extensions).

Чтобы запустить VSC в режиме отладки, нажмите `F5`. При этом так же загрузится
отлаживаемый модуль.  
После внесения изменений в исходный код модуля, отлаживаемое приложение можно
перезапустить нажатием `Ctrl-R` или нажать соответствующую кнопку в панели
отладки).

## Сборка пакетов

Для публикации пакетов на [Marketplace VSC](https://marketplace.visualstudio.com/#VSCode) должна
быть установлена утилита публикации `vsce`. Утилиту можно поставить командой
```
npm install -g vsce
```
Так же вам понадобится Personal Access Token. Настройка утилиты `vsce` описана
[здесь](https://code.visualstudio.com/docs/tools/vscecli), разделы
"Get a Personal Access Token" и "Login to a Publisher". Используемое имя
"Publisher" - `xDrivenDevelopment`.

Утилита публикации пакетов на [Atom.io/packages](https://atom.io/packages) при
первом использовании запросит логин и пароль от GitHub.

Репозитории-подпапки `1с-syntax`, `atom-language-1c-bsl`, `sublime-language-1c-bsl` и `vsc-language-1c-bsl` должны располагаться в одной папке.
В квадратных скобках указано откуда надо выполнять команды.

Первым пунктом необходимо увеличить номер версии в файле `package.json` репозитория `1с-syntax`, сделать коммит и отправить изменения в удаленный репозиторий.

`<version>` обозначает версию пакета, устанавливаемого в `package.json` основного репо. `"v<version>"` означает строку, например, "v1.0.0".

```
[1с-syntax] `bump version in package.json && commit && push`
[1с-syntax] oscript -encoding=utf-8 build.os

[sublime-language-1c-bsl] git push
[sublime-language-1c-bsl] git tag "v<version>"
[sublime-language-1c-bsl] git push origin "v<version>"

[vsc-language-1c-bsl] git push
[vsc-language-1c-bsl] git tag "v<version>"
[vsc-language-1c-bsl] git push origin "v<version>"
[vsc-language-1c-bsl] vsce publish

[atom-language-1c-bsl] apm publish <version>
```
