# ASSESSMENT 4: Ruby Coding Practical Questions

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.

fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]

def sortedOddNumsV1 arr
  isNum = arr.select do |num|
    num.is_a? Integer
  end

  isOdd = isNum.select do |num|
    num.odd?
  end

  isOdd.sort
end


# p sortedOddNumsV1 fullArr1
# p sortedOddNumsV1 fullArr2

# This method will ONLY work if the Integer class:
# 1) is within parenthesis
# 2) the parenthesis must be next to the is_a? method with no space
# 3) the is_a? Integer condition must be before the odd? method

def sortedOddNumsV2 arr
  newArr = arr.select do |num|
    num if num.is_a?(Integer) && num.odd?
  end
  newArr.sort
end

p sortedOddNumsV2 fullArr1
p sortedOddNumsV2 fullArr2



# --------------------2) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data from the bike object.

class Bike
  def initialize model, frame, wheels = 2
    @model = model
    @frame = frame
    @wheels = wheels
    @speed = 0
  end

  def get_info
    puts "The #{@model} bike has #{@wheels} wheels and a #{@frame}cm frame."
  end

  def ring_bell
    # array of different bell bell_sounds
    bell_sounds = ['ring ring', 'beep boop', 'bidibidiboop', 'blllrrrriiiinnnnggggg']
    # sample method randomizes 1 element
    p bell_sounds.sample
  end

  def speed
    # if speed is equal to 0 then print empty string AKA nothing
    # if speed is greater than 0, then print the speed value
    # MUST print speed within parenthesis or method will result in syntax error
    @speed == 0 ? '' : (p @speed)
  end

  def pedal_faster
    @speed += 5
  end

  def brake
    # if speed is greater than 0 move on to next line of code
    if @speed > 0
      # if speed is <= to 2, reduce speed to only decrememnt by 1
      # else, speed is decremented by 3 normally
      @speed <= 2 ? @speed -= 1 : @speed -= 3
    end
  end
end

# Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'
my_bike = Bike.new 'Trek', 168
my_bike.get_info

# -------------------3) Add a bell to the bike class and create a method that will ring the bell when the method is called.
# Expected output example: my_bike.ring_bell => 'Beep beep!'
my_bike.ring_bell

# -------------------4) Add a speedometer to the Bike class. The speed should be initialized at 0.
# Expected output example: my_bike.speed => 0
my_bike.speed

# -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# 5
my_bike.pedal_faster
my_bike.speed

# 10
my_bike.pedal_faster
my_bike.speed

# 7
my_bike.brake
my_bike.speed

# 4
my_bike.brake
my_bike.speed

# 1
my_bike.brake
my_bike.speed

# 0
my_bike.brake
my_bike.speed

# -1
# expected output: NOTHING/empty strings
my_bike.brake
my_bike.speed
