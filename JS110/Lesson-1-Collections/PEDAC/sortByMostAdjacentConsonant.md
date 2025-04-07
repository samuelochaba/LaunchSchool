- loop through the strings
- convert the array of strings to an array of objects where each string is the key of its object
  - count the adjacent consonants in the string
  - create an object with the string as the key, and the adjacent count as the value
- sort the array of objects in descending order based on highest adjacent count
- convert the sorted objects array to a strings array
- return the string array

### Sub problem: Count the adjacent consonants in the string

- remove spaces from the string
- declare and initialize a count variable to 0
- declare and initialize a temp variable to 0
- loop through the string
  - if the current character is not a consonant,
    - if temp > 1
      - set count to count + temp
    - else set temp = 0 and continue to next iteration
  - else: if the current character is a consonant, increase temp by 1
