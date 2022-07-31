package th.`in`.jamievl.demospringboot

import org.springframework.boot.Banner
import org.springframework.boot.runApplication


fun main(args: Array<String>) {
    runApplication<DemoSpringBootApplication>(*args) {
        setBannerMode(Banner.Mode.OFF)
    }
}
