// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./BinaryOptionMarket.sol";

contract Factory {
    event Deployed(address indexed owner, address indexed contractAddress, uint index);

    mapping(address => address[]) public ownerContracts;

    function deploy(address _walletAddress, uint256 _strikePrice) public returns (address) {
        // Ensure the strike price is valid (greater than zero)
        require(_strikePrice > 0, "Strike price must be greater than zero");

        // Deploy a new BinaryOptionMarket contract
        BinaryOptionMarket newContract = new BinaryOptionMarket(msg.sender, _strikePrice);
        
        // Store the contract address in the mapping
        ownerContracts[msg.sender].push(address(newContract));
        
        // Emit the Deployed event with the contract details
        emit Deployed(msg.sender, address(newContract), ownerContracts[msg.sender].length - 1);
        
        return address(newContract);
    }

    function getContractsByOwner(address owner) public view returns (address[] memory) {
        return ownerContracts[owner];
    }
}