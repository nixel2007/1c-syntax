## Документация по редакторам

* Sublime text - http://www.sublimetext.com/docs/3
* Atom - https://atom.io/docs
* VSC - https://code.visualstudio.com/Docs

## Разработка грамматик

ToDo

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
