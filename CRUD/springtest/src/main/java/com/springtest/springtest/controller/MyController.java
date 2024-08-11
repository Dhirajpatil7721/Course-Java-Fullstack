package com.springtest.springtest.controller;

import java.util.List;
import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.springtest.springtest.Services.CourseServices;
import com.springtest.springtest.entities.Course;

@RestController


public class MyController {
	
	@Autowired
	private CourseServices courseServices;

	@GetMapping ("/home")
	public String home() {
		
		return "this is Home Page";
	}
	
	
	//get all courses
	
	@GetMapping("/courses")
	public List<Course>getCourses()
	{
		
		return this.courseServices.getCourses();
		
	}
	
	@GetMapping("/courses/{courseId}")
	public Course getCourse(@PathVariable String courseId) {
		return this.courseServices.getCourse(Long.parseLong(courseId));
	}
	
//	add--------------------------------------------------------------------------
	@PostMapping ("/course")
	public Course addCourse (@RequestBody Course course ) {
		
		return this.courseServices.addcourse(course);
	}
	
	
//	update--------------------------------------------------------------------------
	@PutMapping("/courses")
	public Course updateCourse(@RequestBody Course course) {
		return this.courseServices.updateCourse(course);
	}
	
	
//	delete--------------------------------------------------------------------------
	@DeleteMapping("/courses/{courseId}")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId){
		try {
			this.courseServices.deleteCourse(Long.parseLong(courseId));
			return new ResponseEntity<>(HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
}
