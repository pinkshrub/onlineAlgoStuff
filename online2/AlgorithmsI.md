General Information
Instructors:
Alan Weber(SLACK: @instructor_alan, EMAIL: aweber@codingdojo.com)

Lecture Schedule:
MON-FRI: 2pm - 3pm PST
Meeting will take place with Zoom. Make sure you have zoom.us software installed. Below is the link to the meeting room.
**Meeting Room Address Pending Calendar Things**

Sessions
1/9/2017 intro && Reverse String && Remove Blanks
Reverse String: Implement reverseString(str) that, given a string, returns that string with characters reversed. Given 'creature' return 'erutaerc'. Tempting as it seems, do not use the built in reverse().

Remove Blanks: Create a function that, given a string, returns all of that string's contents, but without the blanks. If given the string, " Pl   ayThat     fu      nk ymus   ic" return "PlayThatfunkyMusic".
Session Recording

1/10/2017 isPalindrome() && get Digits()
isPalindrome(): Create a function that returns a boolean whether the string is a strict palindrome. For 'a x a' or 'racecar', return true. Do NOT ignore spaces, punctuation, and capitalization: if given 'Dud' or 'oho!', return false.

lvl 2: now do ignore white space(spaces, tabs, new lines), capitalization, punctuation.

getDigits(): Create a JavaScript function that given a string, returns the integer made from the string's digits. Given '0a1b2c3d4e', the function should return 1234.

Session Recording

1/11/2017 Built-ins && .split()
split(string, split, limit): Read the documentation to learn the basic functionality of the String.split() method. Do not worry about re-creating a fully robust implementation that can handle multi-character split arguments. For example:
split('bob ross')         // outputs: ['bob ross']
split('bob ross','')      // outputs: ['b','o','b',' ','r','o','s','s']
split('bob ross', ' ')    // outputs: ['bob','ross']
split('bob ross', 'o')    // outputs: ['b', 'b r', 'ss']
split('bob ross', 'o', 2) // outputs: ['b', 'b r']
Session Recording

1/12/2017 INtroduction to associative arrays && zip(), coinchange()
zip(keys, values): Associative arrays are sometimes called maps because a key (string) maps to a value. Given two arrays, create an associative array (map) containing keys of the first, and values of the second. For Example:
arr1 = ["abc", 3, "yo"], arr2 = [42, "wassup", true]
// outputs:  { "abc":       42,
                   3: "wassup",
                "yo":    true
             }

generateCoinChange(credits, currency): Change is inevitable (especially when breaking a twenty). Make generateCoinChange(credits, currency). Accept a number of credits, compute and print how to represent that amount with smallest number of coins. This should accept an object with coin keys and their associated value in credits. Return an object describing how many of each coin you would be given. For Example:
currency = { 'bone':   1,
              'gem': 120,
             'tool':  60,
             'food':   6,
            'ingot':    2
         }
and credits = 189
// Return: result = { 'bone':   1,
                       'gem':   1,
                      'tool':   1,
                      'food':   1,
                     'ingot':   1
                 }
Session Recording

1/13/2017 braces valid && parens valid
parensValid?(string): Create a function that, given an input string str, returns a boolean whether parenthesis in str are valid. Valid sets of parentheses always open before they close, for example: Given "Y(3(p)p(3)r)s", return true. Given "N(0(p)3", return false, as not every parenthesis is closed. Given "N(0)t )0(k", return false, as the second ')' is premature; it isn't clsoing anything.

bracesValid?(string): Given a sequence of parentheses, braces and brackets, determine whether it is valid. Example: "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!" returns true. "D(i{a}l[ t]o)n{e" returns false. "A(1)s[O (n]0{t) 0}k" returns false

Session recording
