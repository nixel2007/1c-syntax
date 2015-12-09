## Документация по редакторам

* Sublime text - http://www.sublimetext.com/docs/3
* Atom - https://atom.io/docs
* VSC - https://code.visualstudio.com/Docs

## Разработка грамматик

ToDo

## Разработка пакетов

ToDo

## Сборка пакетов

Репозитории-подпапки `1c-scrypt`, `atom`, `st` и `vsc` должны располагаться в одной папке.
В квадратных скобках указано откуда надо выполнять команды.

Первым пунктом необходимо увеличить номер версии в файле `package.json` репозитория `1c-scrypt`, сделай коммит и отправить изменения в удаленный репозиторий.

<version> обозначает версию пакета, устанавливаемого в `package.json` основного репо. `"v<version>"` означает строку, например, "v1.0.0".

```
[1c-scrypt] `bump version in package.json && commit && push`
[1c-scrypt] oscript -encoding=utf-8 build.os

[st] git push
[st] git tag "v<version>"
[st] git push origin "v<version>"

[vsc] git push
[vsc] git tag "v<version>"
[vsc] git push origin "v<version>"
[vsc] vsce publish

[atom] apm publish <version>
[atom] git tag "v<version>"
[atom] git push origin "v<version>"
```
