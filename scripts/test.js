var q = QUnit;

q.test("display your name is name", function(assert){
  assert.equal(nameDisplay("Jessica"), "Your name is Jessica!");
});

q.test("cheerFor(name)", function(assert){
  expectedCheer = "Give me an A!\nGive me an L!";
  assert.deepEqual(cheerFor("AL"), expectedCheer);
  expectedCheer = "Give me a B!\nGive me an O!\nGive me a B!";
  assert.deepEqual(cheerFor("Bob"), expectedCheer);
  expectedCheer = "Give me a J!\nGive me an E!\nGive me an S!\nGive me an S!";
  assert.deepEqual(cheerFor("Jess"), expectedCheer);
  expectedCheer = "Give me a J!\nGive me an O!\nGive me a J!\nGive me an O!";
  assert.deepEqual(cheerFor("Jo Jo"), expectedCheer);
});

q.test("display name is great", function(assert){
  assert.equal(closing("Jessica"), "Jessica is Great!");
});

q.test("remove space from name", function(assert){
  assert.equal(removeSpace("Sally Sue", " "), "SallySue"); 
});
