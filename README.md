# Blyth

This is the pure CSS framework for speed and flexibility. It uses CSS variables, and features:

- [Modern CSS Reset](https://github.com/hankchizljaw/modern-css-reset)
- [Goron Design Tokens](https://github.com/hankchizljaw/goron)
- [Utopia Design Scale](https://utopia.fyi/)

🚨 Docs are in the works

## To Do

- Add minification

## Creating a command (Mac)

You can create a helper command to quickly spin up new Blyth projects using `blyth your-project-name`. To do this:

- Create new command file, `touch ~/.my_custom_commands.sh`
- Open the file using nano, `sudo nano ~/.my_custom_commands.sh`
- Add the following:
```
function blyth() {
  git clone git@github.com:ryangittings/blyth.git $1
  cd $1
  rm -rf .git
  yarn
}
```
- Open `~/.bashrc` or `~/.zshrc` using any text editor you have
- Add `source ~/.my_custom_commands.sh`
- Save file
- Refresh config file, `source ~/.bashrc` or `. ~/.zshrc`
- Done!