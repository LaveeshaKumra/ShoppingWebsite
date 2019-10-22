package com.caseStudy.eCart.Respository;
import com.caseStudy.eCart.modals.OrderHistory;
import com.caseStudy.eCart.modals.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface orderHistoryRepository extends JpaRepository<OrderHistory, Integer> {
    List<OrderHistory> findAllByUsers(Users users);

}
