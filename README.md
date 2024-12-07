# React Native useEffect Hook: Direct State Modification

This repository demonstrates a common issue encountered when using the `useEffect` hook in React Native: directly modifying state within the callback function.  This often leads to stale closure problems and unexpected behavior.

The `bug.js` file shows the incorrect implementation.  The `bugSolution.js` file provides the corrected version.

## Problem
The `useEffect` hook's callback function shouldn't directly modify state. State updates in React are asynchronous, and direct modification within the callback may not reflect the changes immediately, leading to inconsistent UI updates and potential race conditions.

## Solution
The solution is to leverage the state's setter function passed by React's useState hook to update the state, ensuring that React's internal state management mechanisms are used effectively.  This guarantees that UI updates are properly synchronized with state changes.