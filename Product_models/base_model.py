#!/usr/bin/python3
""" Module defines a base class for all Delight Farms Models"""
from datetime import datetime


class Basemodel:
    created_at = datetime.now()
