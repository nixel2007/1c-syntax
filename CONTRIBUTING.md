## Документация по редакторам

* Sublime text - http://www.sublimetext.com/docs/3
* Atom - https://atom.io/docs
* VSC - https://code.visualstudio.com/Docs

## Действующие соглашения:

* внутренний идентификатор языка для разработчиков - `bsl`
* имя пакетов, устанавливаемых через пакетные менеджеры - `language-1c-bsl`
* пользовательское имя языка, отображаемого при выборе синтаксиса - `1C (BSL)`

## Разработка грамматик

* Описание формата грамматик (примеры в JSON): http://manual.macromates.com/en/language_grammars
* Описание формирования файла YAML, работа с пакетом `AAAPackageDev`: http://docs.sublimetext.info/en/latest/extensibility/syntaxdefs.html

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
* Atom - https://atom.io/docs/latest/hacking-atom-package-word-count
* VSC - https://code.visualstudio.com/docs/extensions/overview

### Настройка окружения для разработки

#### Sublime Text

Если вы уже клонировали репозиторий `sublime-language-1c-bsl` к себе на
компьютер, вы можете создать символьную ссылку из каталога пакетов.
В случае Windows последовательность действий такова:
  * откройте командную строку с правами администратора
  * перейдите в каталог пакетов командой  `cd %AppData%\Sublime Text 3\Packages`
  * создайте символьную ссылку командной  
  `mklink /D "Language 1C (BSL)" полный/путь/к/вашему/репозиторию/sublime-language-1c-bsl`  
  Название каталога `Language 1C (BSL)` обязательно для корректной работы.

Если вы еще не клонировали репозиторий, то просто склонируйте репозиторий
`1c-syntax` в `%AppData%\Sublime Text 3\Packages\Language 1C (BSL)`

Средства отладки на официальном сайте не обозначены :)  
Попробуйте использовать внешние пакеты, например,
[Plugin Debugger](https://packagecontrol.io/packages/Plugin%20Debugger).

#### Atom

Если вы уже клонировали репозиторий `atom-language-1c-bsl` к себе на компьютер,
вы можете связать их с помощью инструментария самого Atom.
* Откройте командную строку
* Перейдите в папку репозитория `atom-language-1c-bsl`
* Выполните команду `apm link --dev` для создания ссылки
* Выполните команду `apm install` для установки зависимостей пакета
* Откройте папку пакета в Atom в режиме разработчика или выполните команду
`atom --dev .`

Если вы еще не клонировали репозиторий, то последовательность действий такая:
* Откройте командную строку
* Выполните команду `apm develop language-1c-bsl`
* Перейдите в папку
`%userprofile%\.atom\dev\packages\language-1c-bsl`
* При необходимости переключитесь на нужную ветку репозитория `git`
* Выполните команду `apm install` для установки зависимостей пакета
* Откройте папку пакета в Atom в режиме разработчика или выполните команду
`atom --dev .`

После создания ссылки на пакет может потребоваться активация dev-пакета.
В окне редактора откройте настройки (`File` -> `Settings`), перейдите в раздел
`Packages`, найдите раздел `Development packages`, в этом разделе найдите наш
пакет `language-1c-bsl`. Если доступна кнопка `Enable`, нажмите ее.

При таком подходе удалять или деактивировать основной пакет `language-1c-bsl` не
нужно. При запуске Atom в обычном режиме будет использоваться основной
установленный пакет, в режиме разработчка будет использоваться пакет из папки
`dev\packages\language-1c-bsl`.

Подробную информацию об отладке можно найти в
[документации](https://atom.io/docs/latest/hacking-atom-debugging).

После внесения изменений в исходный код модуля, отлаживаемое приложение можно
перезапустить нажатием `Ctrl-Alt-R`.

#### VSC

* Склонируйте репозиторий `vsc-language-1c-bsl` в вашу рабочую папку.  
* Откройте папку репозитория в VSC.

Подробную информацию об отладке и возможных проблемах можно найти
[здесь](https://atom.io/docs/latest/hacking-atom-package-word-count#basic-debugging)
и [здесь](https://code.visualstudio.com/docs/extensions/debugging-extensions).

Чтобы запустить VSC в режиме отладки, нажмите `F5`. При этом так же загрузится
отлаживаемый модуль.  
После внесения изменений в исходный код модуля, отлаживаемое приложение можно
перезапустить нажатием `Ctrl-R` или нажать соответствующую кнопку в панели
отладки.

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
[1с-syntax] `bump version in package.json && make a changelog && commit && push`
[1с-syntax] oscript -encoding=utf-8 build.os
[1с-syntax] oscript -encoding=utf-8 publish.os

[sublime-language-1c-bsl] git push
[sublime-language-1c-bsl] git tag "v<version>"
[sublime-language-1c-bsl] git push origin "v<version>"

[vsc-language-1c-bsl] `bump version in package.json && commit`
[vsc-language-1c-bsl] git push
[vsc-language-1c-bsl] git tag "v<version>"
[vsc-language-1c-bsl] git push origin "v<version>"
[vsc-language-1c-bsl] vsce publish

[atom-language-1c-bsl] apm publish <version>
```
