package com.springtest.springtest.Services;


import java.util.ArrayList;
import java.util.List;
//import java.util.stream.Collectors;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.springtest.springtest.entities.Course;

@Service
public class CourseServiceimpl implements CourseServices {
	
	
	List<Course> list;

	public CourseServiceimpl() {
		
		list=new ArrayList<>();
		list.add(new Course(1,"Java ", "Dhiraj Patil"));
		list.add(new Course(2,"JavaScript", "Ganesh Chougale"));
	}
	
	@Override
	public List<Course> getCourses() {
	
		
		return list;
	}

	@Override
	public Course getCourse(long courseId) {
		// TODO Auto-generated method stub
		
		Course c=null;
		
		for(Course course:list) {
			if(course.getId()==courseId) {
				c=course;
				break;
			}
		}
		return c;
	}

//	add--------------------------------------------------------------------------
	
	@Override
	public Course addcourse(Course course) {
		// TODO Auto-generated method stub
		
		list.add(course);
		return course;
	}
	
//	update--------------------------------------------------------------------------
	
	@Override
	public Course updateCourse(Course course) {
		
		list.forEach(e->{
	if(e.getId()==course.getId()) {		
		
		e.setTitle(course.getTitle());
		e.setDescription(course.getDescription());		
	}
});
		
		
		return course ;
	}
	
//	@Override
//	public Course updateCourse(Course course) {
//	    for (Course e : list) {
//	        if (e.getId() == course.getId()) {
//	            e.setTitle(course.getTitle());
//	            e.setDescription(course.getDescription());
//	            return e;  // Return the updated course object
//	        }
//	    }
//	    return null;  // Return null if no course was found with the given ID
//	}

	
//	delete--------------------------------------------------------------------------
	
	@Override
	public void deleteCourse(long parseLong) {
		list=this.list.stream().filter(e-> e.getId() != parseLong).collect(Collectors.toList());
	}
	

}
