<?php

    class Zodiac {
        public static function zodiak($b,$t){
            if ($b < 1 || $b > 12 || $t < 1 || $t > 31) {
               $hasil = 'tanggal/bulan salah';
            }else {
                if ($b == 1) {
                    if ($t > 19 && $t < 31) {
                        $hasil = 'Aquarius';
                    }
                    if ($t > 0 && $t < 20) {
                        $hasil = 'Taurus';
                    }
                    
                }
                if ($b == 2) {
                    if ($t > 19 && $t <31) {
                        $hasil = 'Capricorn';
                    }
                    if ($t > 0 && $t < 20) {
                        $hasil = 'Sagitarius';
                    }
                }
                if ($b == 3) {
                   if ($t > 19 && $t <31) {
                        $hasil = 'Pisces';
                   }
                   if ($t > 0 && $t < 20) {
                        $hasil = 'Aries';
                   }
                }else {
                   $hasil = 'INVALID';
                }
            }
            return $hasil;
        }
    }

?>