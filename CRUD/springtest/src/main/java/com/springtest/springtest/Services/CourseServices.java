package com.springtest.springtest.Services;

import java.util.List;

import com.springtest.springtest.entities.Course;

public interface CourseServices {

	
	public List<Course> getCourses();
	
	public Course getCourse(long courseId);
	
	public Course addcourse(Course course);

	public Course updateCourse(Course course);

	public void deleteCourse(long parseLong);

	
}
