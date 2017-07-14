One Button
===========

A dead simple example ethereum game, for usage as first app for development. Inspired by this [reddit april fools](https://www.reddit.com/r/thebutton/) the Button is just a single button that you can click. A live score is displayed on the page, with a number that increases every second. If anyone clicks the button, the number goes back to 0. If it overflows 255, it goes back to 0. Once you click the button (and the transaction is picked up!), your score is calculated - but be careful, if someone else clicks just before you, the score will go to zero, and therefore so yours. The goal is to have the highest score.

<img src="https://github.com/alexvandesande/one-button/blob/master/screenhot.png?raw=true" size="100">

Workshop
========


Welcome to our app workshop! To get ready, here's what we recommend you do:

1) Go to the [Mist release page](https://github.com/ethereum/mist/releases/tag/v0.9.0) and download the latest version of Mist. On the *Downloads* section, look for a file named `Mist-` followed by your OS. Alternatively, here's a direct link for [windows installer](https://www.dropbox.com/s/4kksukm3zzos0s9/Mist-installer-0-9-0.exe?dl=0) and a [mac installer](https://www.dropbox.com/s/j7zqfdsde6colp9/Mist-0.9.0.dmg?dl=0)

2) When the download finishes, run it. If it's the first time opening Mist it will show you a splash screen asking if you want to connect to the Main or Test network. For the purposes of this test, select the test network. Follow the instructions to create an account. If the splash screen is skipped, then go to the app menu, then *develop*, *network* and select *Rinkeby test network*. Leave it while it syncs the network.

3) Time to get some free test ether! To request funds, create a [GitHub Gist](https://gist.github.com) with your Ethereum address pasted into the contents (the file name doesn't matter), then copy the gist url and paste it on the top box at [the Rinkeby Faucet website](https://faucet.rinkeby.io)

4) Now let's get some coding ready: go to [this repo on github](https://github.com/alexvandesande/one-button) and click the "clone" button. Once you do it, go to your command line choose a nice root folder for you to work and type `git clone https://github.com/alexvandesande/one-button.git` (replace it with your own github address)

5) Go into the `one-button` folder. You can open index.html and take a look at it: this is our end goal. But don't stare at it too long: rename that file something else and rename the file `empty-page.html` as `index.html` and open it on your favorite text editor

6) Now, you need to know how to run a server on your machine. There are dozens of ways which will depend on your setup. The easiest way, in a mac is to simply go into the folder where the files we are working with are, and type `python -m SimpleHTTPServer 8000`

7) Open localhost:8000 in a browser and see if you have a "hello world" message. If you do, then you are all set!

8) Sit back and watch the presentation a bit. We'll talk about ethereum, smart contracts and apps. You might know some of this, but it's always nice to get everyone on the same boat

9) Your Mist app should be ready by now (if it's not, then open chrome with Metamask). Point it to https://alexvandesande.github.io/one-button/ (or better yet, to bzz://a940012fccdd37dfd59f7cf6556ccdfc7b700ce44318724af0301f2d6d4dcb75/ ) and we'll play a game! 

