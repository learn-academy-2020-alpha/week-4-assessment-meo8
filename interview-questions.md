# ASSESSMENT 4: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. What is an instance variable in Ruby? How is it different from other variables?

  Your answer:
  An instance variable is a variable inherited from a class. Its scope is within its object instance. Two object created from the same class can have different variable values.

  Researched answer:
  An instance variable is a kind of variable that is used inside classes and starts with an @ symbol. From outside objects, instance variables cannot be altered or even viewed. An undefined instance variable always return nil. They don't have to be created in the intialize method, but that's how you give them an initial value.

  How to view a list of instance variables: `objectName.instance_variables`.

  Besides creating a getter method, instance variables can be viewed using an attribute reader: `attr_reader :speed`.


2. What is a block in Ruby?

  Your answer:
  An if statement is a block, a loop is a block. It contains a block of code with variables and values that's only within that scope.

  Researched answer:
  Ruby Code blocks are chunks of code between {} braces or between `do..end` that you can associate with method invocations. When using the braces, it code can only be single-line code. Blocks can have block parameters that's placed within pipes `||`. For loops such as .each, .select, it's value is each element in the array.

  Methods can recieve a block:
  ```ruby
    def my_method
      puts "this prints first"
      yield
    end

    my_method { puts "this goes where the keyword yield is" }
  ```


3. Ruby has an implicit return. What does that mean?

  Your answer:
  It means the return keyword is not needed. The method's last line is automatically returned.

  Researched answer:
  Every block in ruby will return the value of the last line automatically, so it's common to not use the return keyword in favor of minimal code. Although it may cause some confusion in bigger methods, some people tend to not use the return keyword explicitly. Once the return keyword is used, it stops the method from executing further.



4. What is object-oriented programming? How is it different than functional programming?

  Your answer:
  OOP uses classes and methods. In Ruby, everything is essentially an object.
  Functional programming is all about functions.

  Researched answer:
  OOP is a programming paradigm that was created to deal with the growing complexity of large software systems. Programmers found out very early on that as applications grew in complexity and size, they became very difficult to maintain. There are now more guidelines on how the language is organized. For example, encapsulations, polymorphism, abstraction and inheritance.

  OOP has the concept of inheritance (new objects taking on the attributes/methods of existing objects letting us reuse more code) and encapsulation (the data and methods related to a certain object being bound together, creating independent, protected entities) makes it easier to manage and manipulate data. Functional programming has separation of data and methods, as well as the high level of abstraction.


5. What is the difference between a class and an object?

  Your answer:
  An object is an instance of a class. A class is like a blueprint and an object is the product of the blueprint. Objects are created using the new keyword. Any intial value initialized within the class is inherited by the object created from it. Each object can have different values thanks to encapsulation.

  Researched answer:
  A Ruby object has three components: a set of flags, some instance variables, and an associated class. A Ruby class is an object of class Class, which contains all the object things plus a list of methods and a reference to a superclass (which is itself another class). All method calls in Ruby nominate a receiver (which is by default self, the current object). Ruby finds the method to invoke by looking at the list of methods in the receiver's class. If it doesn't find the method there, it looks in the superclass, and then in the superclass's superclass, and so on. If the method cannot be found in the receiver's class or any of its ancestors, Ruby invokes the method method_missing on the original receiver.
