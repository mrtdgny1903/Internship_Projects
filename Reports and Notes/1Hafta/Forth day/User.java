package com.websystique.springboot.model;
	
public class User {

	private long id;
	
	private String name;
	
	private String lastName;
	
	private boolean active;

	public User(){
		id=0;
	}
	
	public User(long id, String name, String lastName, boolean active){
		this.id = id;
		this.name = name;
		this.lastName = lastName;
		this.active = active;
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	

	@Override
	public String toString() {
		return "User [name=" + name + ", last name=" + lastName
				+ ", active=" + active + "]";
	}


}
