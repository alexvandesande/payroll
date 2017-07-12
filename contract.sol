/* 
Based on a contract built by Vlad and Vitalik for Ether signal
If you need a license, refer to WTFPL.
*/
pragma solidity ^0.4.11;
contract TheButton {
    uint public lastPressed;
    event ButtonPress(address presser, uint pressTime, uint score);

    function TheButton() {
        lastPressed = now;
    }
    
    /// @notice Press the button! 
    function press() {
        ButtonPress(msg.sender, now, (now - lastPressed)%256);
        lastPressed = now;
    }
}