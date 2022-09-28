package com.example.askiacsd;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface MybatisRepository {
	@Select("select email from admin")
	public List<String> getAllAdmins();
	
	@Select("select question_id from verified_answers")
	public List<String> getAllVerifiedAnswers();
	
	@Insert("insert into verified_answers(question_id) values(#{questionId})")
	public void insertAnswer(String questionId);
	
	@Delete("delete from verified_answers where question_id=#{questionId}")
	public void deleteAnswer(String questionId);
	
}
