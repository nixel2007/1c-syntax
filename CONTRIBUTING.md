## Документация по редакторам

* Sublime text - http://www.sublimetext.com/docs/3
* Atom - https://atom.io/docs
* VSC - https://code.visualstudio.com/Docs

## Разработка грамматик

* Описание формата грамматик (примеры в JSON): http://manual.macromates.com/en/language_grammars
* Описание формирования файла YAML, работа с пакетом `AAAPackageDev`: http://docs.sublimetext.info/en/latest/extensibility/syntaxdefs.html

*Рекомендация*:  
На данный момент разработку грамматик рекомендуется вести в редакторе Sublime Text.

**Важно:**  
Если вашем редакторе установлен пакет `language-1c-bsl`, необходимо его деактивировать или удалить через пакетный менеджер.  

### Редактирование в Sublime Text
* Установите пакет `AAAPackageDev` через пакетный менеджер
* Склонируйте репозиторий `1c-syntax` в папку `%AppData%\Roaming\Sublime Text 3\Packages\1c-syntax`
* Убедитесь, что подсветка 1С-синтаксиса заработала
* Откройте файл `1c.YAML-tmLanguage` и внесите свои изменения
* Выполните команду `Tools` -> `Build` (Ctrl + b). Если появится окно `Convert to ...`, выберите верхний вариант `Convert to ...`. Внизу должно открыться окно с информацией и текстом `No target format specified, searching in file... Property List`. Если вы допустили ошибку в файле YAML, то ошибка будет отражена там же.
* Изменения синтаксиса должны примениться автоматически. Если этого не произошло, попробуйте переоткрыть редактор
* Сделайте коммит и отправьте изменения файла `1c.YAML-tmLanguage` в основной репозиторий `1c-syntax`

## Разработка пакетов

ToDo

## Сборка пакетов

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
[vsc-language-1c-bsl] vsc-language-1c-bsle publish

[atom-language-1c-bsl] apm publish <version>
```
