# Mastermind

Your task is to write a simple command line application to allow a user to play a game of Mastermind.

Mastermind is a game where a player has to guess a secret colour code. The secret code is made up of 4 colours, chosen by the computer from 6 available colours.

The available colours are: Orange (O), Pink (P), Yellow (Y), Green (G), White (W), and Black (B)

Secret code example: OYGW (Orange, Yellow, Green, White).

Rules:

The computer first generates a secret code (repeated colours are allowed)

The player guesses what the code is.

The computer indicates how close the player's guess is, using green and yellow indicators as follows:
1 green indicator for each correct colour in the correct place
1 yellow indicator for each correct colour in the wrong place
The above indicators have no relation to the order of the code or guess. They will tell the player how many colours they have guessed correctly, but not which ones.

The user may then use this information to make their next guess. They have eight guesses to crack the secret code and win the game.

If the code is cracked the game will show a win message.

If the user has no guesses left the game will show a lose message and reveal the secret code.

If the user has not cracked the code but has guesses left, the number of remaining guesses is shown.

Examples:

Orange and Pink are correct but in the wrong place, White and Black are not in the secret code:

Code:   OPYG
Guess:  WBOP
Response: YY

Pink correct and in the right place, Green is in wrong place, White and Black are not in code:

Code:   OPYG
Guess:  WPGB
Response: GY

Orange is correct and in the right place, all others correct but in the wrong place:

Code:   OPYG
Guess:  OGPY
Response: GYYY
