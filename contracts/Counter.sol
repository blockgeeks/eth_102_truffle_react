pragma solidity ^0.5.11;


contract Counter {

    uint public count;

    constructor(uint _count) public {
        count = _count;
    }
    
    function increment() external {
        count++;
    }
    
    function decrement() external {
        count--;
    }
}