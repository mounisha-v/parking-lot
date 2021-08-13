var Car = require('./car.js');


// 	A base class for Parking lot
 
 
class ParkingLot {

	constructor () {
        this.MAX_PARKING_SLOTS = 0; // maximum parking slots allowed
        this.parkingSlots = new Array(); // array for parking slots
    }



    createParkingFloor(input){
        this.maxfloor=parseInt(input.split(' ')[1]);
        if(this.maxfloor<=0){
            throw new Error('Minimum one slot is required to create parking floor')
            
        }
        for (var i = 0; i < this.maxfloor; i++) {
            this.parkingfloor.push(null);
        }
        return this.maxfloor;
    }
    createParkingLot (input) {
		this.MAX_PARKING_SLOTS = parseInt(input.split(' ')[1]);
		if (this.MAX_PARKING_SLOTS <= 0) {
			// minimum: 1 slot
			throw new Error('Minimum one slot is required to create parking slot');
		}
        for (var i = 0; i < this.MAX_PARKING_SLOTS; i++) {
            this.parkingSlots.push(null);
        }
        return this.MAX_PARKING_SLOTS;
	}

	/*
	 
	  user's input via terminal
	  creates a parking lot with given maximum slot numbers.
	  It throws an error if zero or negative input is provided
	 */

            
    parkCar (input) {
        var len = this.parkingSlots.length;
    	if (this.MAX_PARKING_SLOTS > 0) {
			var car, carNumber, carColor, carType;
	    	if (this.findNearestAvailableSlot(this.parkingSlots) == true) {
		  		for (var i = 0; i < len; i++) {
		  			if (this.parkingSlots[i] == null) {
						carNumber = input.split(' ')[1];
						carColor = input.split(' ')[2];
                        carType = input.split(' ')[3];
						if (carNumber && carColor && carType) {
							car = new Car(carNumber, carColor, carType);
							this.parkingSlots[i] = car;
							i = i + 1;
							return i;
						}
						else {
							throw new Error('Please provide registration number and color both');
						}
		  			}
		  		}
			  }
			else {
		  		throw new Error('Sorry, parking lot is full');
		  	}
          }
          else {
	  		throw new Error('Minimum one slot is required to create parking slot');
	  	}
	}
	/*
	 
	  user's input via terminal
	  allocates nearest slot number to incoming cars.
	  It throws an error if parking lot is empty or full.
	  It also throws an error if only one field (either registration number or color 0r type) is provided.
	 */
    
	   
    leaveCar (input) {
    	if (this.MAX_PARKING_SLOTS > 0) {
			var index = parseInt(input.split(' ')[1] - 1);
			if (index >= this.MAX_PARKING_SLOTS) {
				throw new Error(`Slot number ${index + 1} is not found`);
			}
			else if (this.parkingSlots[index] === null) {
				throw new Error(`Slot number ${index + 1} is already free`);
			}
		    else if (index > -1 && index <= this.parkingSlots.length) {
			    this.parkingSlots[index] = null;
			    index = index + 1;
			    return index;
			}
		}
		else {
			throw new Error('Sorry, parking lot is empty');
		}
	}

	/**
	 *
	 user's input via terminal
	 *  it makes the slot free for the car of given registration number.
	 * It throws an error if car is not found.
	 */
	leaveCarByCarNumber (input) {
		if (this.MAX_PARKING_SLOTS > 0) {
			var carNumber = input.split(' ')[1];
		    for (var index = 0; index < this.MAX_PARKING_SLOTS; index++) {
				if (this.parkingSlots[index].NUMBER === carNumber) {
					this.parkingSlots[index] = null;
					return index + 1;
				}
			}
		}
		else {
			throw new Error('Sorry, car with given registration is not found');
		}
	}

	/**
	 * Returns an array containing parking details i.e. slot no, registration number and color ,type of vehicle
	 */
    getParkingStatus () {
    	var arr = new Array();
    	if (this.MAX_PARKING_SLOTS > 0) {
			arr.push('Slot No. Registration No. Color ');

			
        	for (var i = 0; i < this.parkingSlots.length; i++) {
        		if (this.parkingSlots[i] != null) {
        			var e = i + 1;
        			arr.push(e + '.  ' + this.parkingSlots[i].NUMBER + '  ' + this.parkingSlots[i].COLOR + ' ' + this.parkingSlots[i].TYPE);
        		}
        	}
        	return arr;
		}
		else {
			throw new Error('Sorry, parking lot is empty');
		}
	}

	/**
	 *
	 *  user's input via terminal
	 * returns a comma separated string of registration numbers of car having same color.
	 * It returns null if car is not found
	 */
    getCarsWithSameColor (input) {
    	if (this.MAX_PARKING_SLOTS > 0) {
	        var sameColoredCarsArray = new Array();
	        for (var i = 0; i < this.parkingSlots.length; i++) {
	        	if (this.parkingSlots[i] && this.parkingSlots[i].COLOR.toLowerCase() == input.split(' ')[1].toLowerCase()) {
	        		sameColoredCarsArray.push(this.parkingSlots[i].NUMBER);
	        	}
	        }
    		return sameColoredCarsArray.join(', ');
		}
		else {
			return null;
		}
	}

	/**
	 *
	 *  user's input via terminal
	 *  returns a comma separated string of slot numbers for cars of given color.
	 * It returns null if cars of given color is not found.
	 */
    getSlotsWithSameColorCar (input) {
    	if (this.MAX_PARKING_SLOTS > 0) {
	    	var slotsWithSameColorCarArray = new Array();
	        for (var i = 0; i < this.parkingSlots.length; i++) {
	        	if (this.parkingSlots[i] && this.parkingSlots[i].COLOR.toLowerCase() == input.split(' ')[1].toLowerCase()) {
	        		slotsWithSameColorCarArray.push(i + 1);
	        	}
	        }
        	return slotsWithSameColorCarArray.join(', ');
        }
        else {
			return null;
		}
	}

	/**
	 *
 user's input via terminal
	 returns slot number for given car number.
	 * It returns null if car is not found.
	 */
    getSlotByCarNumber (input) {
		
		if (this.MAX_PARKING_SLOTS > 0) {
	    	var ele = 'Not found';
	        for (var i = 0; i < this.parkingSlots.length; i++) {
	        	if (this.parkingSlots[i] && this.parkingSlots[i].NUMBER == input.split(' ')[1]) {
	        		ele = i + 1;
	        	}
	        }
        	return ele;
        }
        else {
			return null;
		}
	}

	
	findAllAvailableSlots () {
		if (this.MAX_PARKING_SLOTS > 0) {
	    	var availableSlots = new Array();
	        for (var i = 0; i < this.parkingSlots.length; i++) {
	        	if (!(this.parkingSlots[i] && this.parkingSlots[i].COLOR && this.parkingSlots[i].NUMBER)) {
	        		availableSlots.push(i + 1);
	        	}
	        }
        	return availableSlots.join(', ');
        }
        else {
			return null;
		}
	}

	
	findAllAllocatedSlots () {
		if (this.MAX_PARKING_SLOTS > 0) {
	    	var allocatedSlots = new Array();
	        for (var i = 0; i < this.parkingSlots.length; i++) {
	        	if (this.parkingSlots[i] && this.parkingSlots[i].COLOR && this.parkingSlots[i].NUMBER) {
	        		allocatedSlots.push(i + 1);
	        	}
	        }
        	return allocatedSlots.join(', ');
        }
        else {
			return null;
		}
	}

	
	findNearestAvailableSlot () {
		var ele = false;
		for (var i = 0; i < this.parkingSlots.length; i++) {
			if (this.parkingSlots[i] == null) {
				ele = true;
			}
		}
		return ele;
	}
}

module.exports = ParkingLot;