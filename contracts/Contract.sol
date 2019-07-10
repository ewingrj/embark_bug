pragma solidity ^0.5.10;

contract Contract {

    struct Record {
        bytes32 a;
        address b;
    }

    mapping(bytes32 => Record) public records;
    uint256 public numOfRecords;

    constructor () public {
        records[0x0000000000000000000000000000000000000000000000000000000000000001] = Record(0x0000000000000000000000000000000000000000000000000000000000000002, msg.sender);
    }
}